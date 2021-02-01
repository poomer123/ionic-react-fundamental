import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';
// import { useGetInfo } from '@ionic/react-hooks/device';
import { useCurrentPosition } from '@ionic/react-hooks/geolocation';
import { Plugins } from '@capacitor/core';

const Home: React.FC = () => {
	// const { info } = useGetInfo();
	const { currentPosition } = useCurrentPosition();
	const {
		coords: { longitude, latitude },
	} = currentPosition || { coords: {} };

	const { OpenMap } = Plugins;

	const goToMap = () => {
		alert(`${latitude}, ${latitude}`);
		OpenMap.open({ longitude, latitude });
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonLabel>{JSON.stringify(currentPosition)}</IonLabel>
				<IonButton expand="full" onClick={() => goToMap()}>
					Open Map
				</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Home;
