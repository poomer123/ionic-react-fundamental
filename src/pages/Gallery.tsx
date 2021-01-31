import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Gallery: React.FC = () => {
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
				<h1 style={{ textAlign: 'center', marginTop: '40px' }}>Gallery Page Content</h1>
			</IonContent>
		</IonPage>
	);
};

export default Gallery;
