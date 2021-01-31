import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonLabel,
	IonCard,
	IonCardTitle,
	IonCardHeader,
	IonImg,
	IonCardContent,
	IonSlides,
	IonSlide,
} from '@ionic/react';
import React from 'react';

const projects = [
	{
		id: 1,
		name: 'Play Channel',
		image: 'https://playchannel.kickdown.in.th/assets/images/slide-3.jpg',
		link: 'https://playchannel.kickdown.in.th/',
		desc: 'Community Gamer แนะนำสำหรับคุณ',
	},
	{
		id: 2,
		name: 'Blog ข่าวแนะนำสำหรับคุณ',
		image: 'https://list-step-api.kickdown.in.th/uploads/images/200827152049_523d037adae56d86cf2a253c9d59c71b.png',
		link: 'https://list-step-application.kickdown.in.th/',
		desc: 'ออกแบบ UI ไปจนถึงการทำ Prototype ด้วย Figma',
	},
	{
		id: 3,
		name: 'แม่สื่อแม่ชัก',
		image: 'https://playqpid.kickdown.in.th/static/media/ex_content_1.85a96cd6.jpg',
		link: 'https://playqpid.kickdown.in.th/',
		desc: 'Application หาคู่ที่เหมาะกับทุก life style',
	},
];

const NewItem = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Projects</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonSlides>
					{projects.map((projectInfo) => (
						<IonSlide key={projectInfo.id}>
							<IonCard>
								<IonImg src={projectInfo.image} />
								<IonCardHeader>
									<IonCardTitle>{projectInfo.name}</IonCardTitle>
									<IonCardContent>
										<IonLabel>{projectInfo.desc}</IonLabel>
										<IonButton expand="block" href={projectInfo.link}>
											ชมโครงการ
										</IonButton>
									</IonCardContent>
								</IonCardHeader>
							</IonCard>
						</IonSlide>
					))}
				</IonSlides>
			</IonContent>
		</IonPage>
	);
};

export default NewItem;
