import {
    IonApp,
    IonButton,
    IonContent,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { schoolOutline, settingsOutline, leafOutline, homeOutline } from 'ionicons/icons';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import Home from '../home/Home';


/* Components */
import Login from '../login/Login';
import Parameter from '../parameter/Parameter';
import PlantRouter from '../plant/PlantRouter';
import SeriesList from '../series/SeriesList';


const Connected: React.FC = () => {
    let { path, url } = useRouteMatch();
    console.log("path : ", path);
    console.log("url : ", url);


    return (
        <IonReactRouter>

            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path={`${path}/parameter`}>
                        <Parameter />
                    </Route>

                    <Route exact path={`${path}/quiz`}>
                        <SeriesList />
                    </Route>

                    <Route exact path={`${path}/plants`}>
                        <PlantRouter />
                    </Route>

                    <Route exact path={`${path}/home`}>
                        <Home />
                    </Route>
                    <Route exact path={`${path}/`}>
                        <Redirect to={`${path}/home`} />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href={`${url}/home`}>
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="plants" href={`${url}/plants`}>
                        <IonIcon icon={leafOutline} />
                        <IonLabel>Plants</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="quiz" href={`${url}/quiz`}>
                        <IonIcon icon={schoolOutline} />
                        <IonLabel>Quiz</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="parameter" href={`${url}/parameter`}>
                        <IonIcon icon={settingsOutline} />
                        <IonLabel>Parameter</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>

        </IonReactRouter>
    )
};

export default Connected;
