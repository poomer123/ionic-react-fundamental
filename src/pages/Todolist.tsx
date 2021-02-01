import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonList,
	IonFab,
	IonFabButton,
	IonIcon,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
	IonActionSheet,
} from '@ionic/react';
import { add, trash } from 'ionicons/icons';
import { Plugins } from '@capacitor/core';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import Todo from '../components/Todo';

const todos = [
	{ id: 1, name: 'Go To Work', deadline: 5 },
	{ id: 2, name: 'Buy a Skooldio Course', deadline: 2 },
	{ id: 3, name: 'Finish a Skooldio Course', deadline: 1 },
];

const { Haptics } = Plugins;

const Todolist: React.FC<RouteComponentProps> = (props) => {
	const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
	const [selectedTask, setSelectedTask] = useState<number>();

	useIonViewWillEnter(() => {
		console.log('useIonViewWillEnter');
	});
	useIonViewDidEnter(() => {
		console.log('useIonViewDidEnter');
	});
	useIonViewWillLeave(() => {
		console.log('useIonViewWillLeave');
	});
	useIonViewDidLeave(() => {
		console.log('useIonViewDidLeave');
	});
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Todolist of Apirat</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Todolist of Apirat</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonList>
					{todos.map((todo) => {
						return (
							<Todo
								key={todo.id}
								{...todo}
								onClinkAction={() => {
									setSelectedTask(todo.id);
									setShowActionSheet(true);
									Haptics.vibrate();
								}}
							/>
						);
					})}
				</IonList>
				<IonFab vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton onClick={() => props.history.push('/new')}>
						<IonIcon icon={add} />
					</IonFabButton>
				</IonFab>
				<IonActionSheet
					isOpen={showActionSheet}
					buttons={[
						{
							text: 'Delete',
							icon: trash,
							role: 'destructive',
							handler: () => {
								alert(`Delete ${selectedTask}`);
							},
						},
					]}
					onDidDismiss={() => {
						setShowActionSheet(false);
					}}
				></IonActionSheet>
			</IonContent>
		</IonPage>
	);
};

export default Todolist;
