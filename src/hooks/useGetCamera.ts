import { useState, useEffect } from 'react';
import { CameraResultType, CameraSource, Capacitor, FilesystemDirectory, CameraPhoto } from '@capacitor/core';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useCamera } from '@ionic/react-hooks/camera';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';

export interface Photo {
	filepath: string;
	webviewPath?: string;
}

const PHOTO_STORAGE = 'ionic-photo';

const useGetCamera = () => {
	const { getPhoto } = useCamera();
	const [photos, setPhotos] = useState<Photo[]>([]);

	const { writeFile, readFile } = useFilesystem();
	const { set, get } = useStorage();

	useEffect(() => {
		const loadPhoto = async () => {
			const photoString = await get(PHOTO_STORAGE);
			const photos = photoString ? JSON.parse(photoString) : [];
			if (!isPlatform('hybrid')) {
				for (const photo of photos) {
					const file = await readFile({
						path: photo.filepath,
						directory: FilesystemDirectory.Data,
					});
					photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
				}
			}

			setPhotos(photos);
		};
		loadPhoto();
	}, []);

	const takePhoto = async () => {
		const newPhoto = await getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
		});

		const fileName = new Date().getTime() + '.jpeg';
		const savedPhoto = await savePhoto(newPhoto, fileName);
		const newPhotos = [...photos, savedPhoto];
		setPhotos(newPhotos);
		set(PHOTO_STORAGE, JSON.stringify(newPhotos));
	};

	const savePhoto = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
		if (isPlatform('hybrid')) {
			const file = await readFile({
				path: photo.path!,
			});
			const base64Data = file.data;
			const savedFile = await writeFile({
				path: fileName,
				data: base64Data,
				directory: FilesystemDirectory.Data,
			});

			return {
				filepath: savedFile.uri,
				webviewPath: Capacitor.convertFileSrc(savedFile.uri),
			};
		} else {
			const base64Data = await base64FromPath(photo.webPath!);
			const savedFile = await writeFile({
				path: fileName,
				data: base64Data,
				directory: FilesystemDirectory.Data,
			});
			return {
				filepath: savedFile.uri,
				webviewPath: Capacitor.convertFileSrc(savedFile.uri),
			};
		}
	};

	return {
		takePhoto,
		photos,
	};
};

export default useGetCamera;
