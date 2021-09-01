import {
  IonApp,
  IonBadge,
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
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';
import Plants from './components/plant/Plants';
import PlantDetail from './components/plant/PlantDetail';

/* Components */
import Login from './components/login/Login';
import SeriesList from './components/series/SeriesList';
import Parameter from './components/parameter/Parameter';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Plants}></Route>
        <Route exact path="/plants" component={Plants}/>

        <Route exact path="/plants/personnal/:id" component={PlantDetail}/>
        <Route exact path="/plants/public/:id" component={PlantDetail}/>

      </IonRouterOutlet>
      <IonContent>

        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/parameter">
              <Parameter />
            </Route>

            <Route exact path="/quiz">
              <SeriesList />
            </Route>

            <Route exact path="/plants">
              <Plants />
            </Route>

            <Route exact path="/home">
              <Login />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
              <IonBadge>6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="plants" href="/plants">
              <IonIcon icon={leafOutline} />
              <IonLabel>Plants</IonLabel>
            </IonTabButton>

            <IonTabButton tab="quiz" href="/quiz">
              <IonIcon icon={schoolOutline} />
              <IonLabel>Quiz</IonLabel>
            </IonTabButton>

            <IonTabButton tab="parameter" href="/parameter">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Parameter</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>

    </IonReactRouter>
  </IonApp>
);

export default App;
