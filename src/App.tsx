import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { arrowBackCircle, leafOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

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

/* Components */
import PlantRouter from './components/plant/PlantRouter';
import Login from './components/login/Login';
import SeriesList from './components/series/SeriesList';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/plants">
          <PlantRouter />
        </Route>

        <Route exact path="/series">
          <SeriesList />
        </Route>

        <Route exact path="/home">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={arrowBackCircle} />
        </IonFabButton>

        <IonFabList side="start">
          <IonFabButton href="/plants">
            <IonIcon icon={leafOutline} />
          </IonFabButton>
        </IonFabList>
      </IonFab>

    </IonReactRouter>
  </IonApp>
);

export default App;
