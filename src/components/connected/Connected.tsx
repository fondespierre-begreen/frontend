import {
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { schoolOutline, settingsOutline, leafOutline, homeOutline } from 'ionicons/icons';
import { Redirect, Route, RouteComponentProps, useRouteMatch } from 'react-router-dom';

/* Components */
import Home from '../home/Home';
import SeriesList from '../series/SeriesList';
import Parameter from '../parameter/Parameter';
import Plants from '../plant/Plants';
import PlantDetail from '../plant/PlantDetail';


/**
 * @returns Routeur interne (l'app de Begreen) et la barre de navigation.
 */
const Connected: React.FC<RouteComponentProps> = ({ match }, props) => {
    // let { path, url } = useRouteMatch();
    console.log(match);
    console.log(props);
    

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path={`${match.url}/parameter`}>
                        <Parameter />
                    </Route>

                    <Route exact path={`${match.url}/quiz`}>
                        <SeriesList />
                    </Route>

                    <Route exact path={`${match.url}/plants`}>
                        <Plants />
                    </Route>

                    <Route exact path={`${match.url}/home`}>
                        <Home />
                    </Route>
                    <Route exact path={`${match.url}/`}>
                        <Redirect to={`${match.url}/home`} />
                    </Route>

                    {/* <Route render={() => <Redirect to={match.url} />} /> */}
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href={`${match.url}/home`}>
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="plants" href={`${match.url}/plants`}>
                        <IonIcon icon={leafOutline} />
                        <IonLabel>Plantes</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="quiz" href={`${match.url}/quiz`}>
                        <IonIcon icon={schoolOutline} />
                        <IonLabel>Quiz</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="parameter" href={`${match.url}/parameter`}>
                        <IonIcon icon={settingsOutline} />
                        <IonLabel>Paramètre</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
};

export default Connected;
