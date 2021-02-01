import {
	IonContent,
	IonFab,
	IonFabButton,
	IonGrid,
	IonHeader,
	IonIcon,
	IonImg,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	IonCol,
} from '@ionic/react';
import React from 'react';
import { camera } from 'ionicons/icons';
import useGetCamera from '../hooks/useGetCamera';

const Gallery: React.FC = () => {
	const { takePhoto, photos } = useGetCamera();
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Gallery</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Gallery</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonGrid>
					<IonRow>
						{photos.map((photo, i) => (
							<IonCol size="6" key={i}>
								<IonImg src={photo.webviewPath} />
							</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonFab vertical="bottom" horizontal="center" slot="fixed">
					<IonFabButton onClick={() => takePhoto()}>
						<IonIcon icon={camera} />
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Gallery;
