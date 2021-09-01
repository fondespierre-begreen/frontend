import {
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

/* Components */
import Home from '../home/Home';
import SeriesList from '../series/SeriesList';
import Parameter from '../parameter/Parameter';
import Plants from '../plant/Plants';
import PlantDetail from '../plant/PlantDetail';


/**
 * @returns Routeur interne (l'app de Begreen) et la barre de navigation.
 */
const Connected: React.FC = () => {
    let { path, url } = useRouteMatch();

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
                        <Plants />
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
                        <IonLabel>Plantes</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="quiz" href={`${url}/quiz`}>
                        <IonIcon icon={schoolOutline} />
                        <IonLabel>Quiz</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="parameter" href={`${url}/parameter`}>
                        <IonIcon icon={settingsOutline} />
                        <IonLabel>Paramètre</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
};

export default Connected;
