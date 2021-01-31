import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLoading, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, list, newspaperOutline, imagesOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Todolist from './pages/Todolist';
import NewItem from './pages/NewItem';
import Project from './pages/Project';
import Gallery from './pages/Gallery';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonTabBar slot="bottom">
						<IonTabButton tab="home" href="/home">
							<IonIcon icon={home} />
							Home
						</IonTabButton>
						<IonTabButton tab="todo" href="/todolist">
							<IonIcon icon={list} />
							Todo
						</IonTabButton>
						<IonTabButton tab="projects" href="/projects">
							<IonIcon icon={newspaperOutline} />
							Projects
						</IonTabButton>
						<IonTabButton tab="gallery" href="/gallery">
							<IonIcon icon={imagesOutline} />
							Gallery
						</IonTabButton>
					</IonTabBar>
					<IonRouterOutlet>
						<Route path="/home" component={Home} exact={true} />
						<Route path="/todolist" component={Todolist} exact={true} />
						<Route path="/new" component={NewItem} exact={true} />
						<Route path="/projects" component={Project} exact={true} />
						<Route path="/gallery" component={Gallery} exact={true} />
						<Route exact path="/" render={() => <Redirect to="/home" />} />
					</IonRouterOutlet>
				</IonTabs>
			</IonReactRouter>
			<IonLoading isOpen={isLoading} />
		</IonApp>
	);
};

export default App;
