import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonList,
	IonButton,
	IonIcon,
	IonLabel,
	IonInput,
	IonItem,
	IonButtons,
	IonBackButton,
	IonAlert,
} from '@ionic/react';
import { save } from 'ionicons/icons';

import React, { useState } from 'react';

const NewItem: React.FC = () => {
	const [taskName, setTaskName] = useState<string>();
	const [isShowAlert, setIsShowAlert] = useState<boolean>(false);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
					<IonTitle>New Item</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">New Item</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonList>
					<IonItem>
						<IonLabel>Task Name</IonLabel>
						<IonInput
							value={taskName}
							placeholder="Enter Input"
							onIonChange={(e) => setTaskName(e.detail.value!)}
						></IonInput>
					</IonItem>
				</IonList>
				<IonButton onClick={() => setIsShowAlert(true)}>
					<IonIcon slot="start" icon={save} />
					<IonLabel>Save</IonLabel>
				</IonButton>
			</IonContent>
			<IonAlert
				isOpen={isShowAlert}
				header="Ionic Alert"
				message={`Task Name is ${taskName}`}
				onDidDismiss={() => setIsShowAlert(false)}
				buttons={['ok']}
			/>
		</IonPage>
	);
};

export default NewItem;
