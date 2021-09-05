import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, leaf, school, settingsSharp } from 'ionicons/icons';
import { Redirect, Route, RouteComponentProps, useRouteMatch } from 'react-router-dom';

/* Components */
import Home from '../home/Home';
import SeriesList from '../series/SeriesList';
import Parameter from '../parameter/Parameter';
import Plants from '../plant/Plants';
import PlantDetail from '../plant/PlantDetail';
import PlantCreateCard from '../plant/PlantCreateCard';


/**
 * @returns Routeur interne (l'app de Begreen) et la barre de navigation.
 */
const Connected: React.FC<RouteComponentProps> = ({ match }) => {
    // let { path, url } = useRouteMatch();
    // console.log(match);

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path={`${match.url}/plants/public/:id`} component={PlantDetail} />
                    <Route path={`${match.url}/plants/personnal/:id`} component={PlantDetail} />
                    <Route path={`${match.url}/plants/create`} render={(props) => <PlantCreateCard {...props} />} />

                    <Route exact path={`${match.url}/parameter`}>
                        <Parameter />
                    </Route>

                    <Route exact path={`${match.url}/quiz`}>
                        <SeriesList />
                    </Route>

                    {/* <Route exact path={`${match.url}/plants`}>
                        <Plants />
                    </Route> */}
                    <Route exact path={`${match.url}/plants`} render={(props) => <Plants {...props} />} />

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
                        <IonIcon icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="plants" href={`${match.url}/plants`}>
                        <IonIcon icon={leaf} />
                        <IonLabel>Plantes</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="quiz" href={`${match.url}/quiz`}>
                        <IonIcon icon={school} />
                        <IonLabel>Quiz</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="parameter" href={`${match.url}/parameter`}>
                        <IonIcon icon={settingsSharp} />
                        <IonLabel>Paramètre</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
};

export default Connected;
