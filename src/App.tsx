import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonIcon, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SeriesList from './components/series/SeriesList';

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
import { home, leaf, school, settingsSharp } from 'ionicons/icons';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/series">
            <SeriesList />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home}></IonIcon>
          </IonTabButton>
          <IonTabButton tab="plants" href="/plants">
            <IonIcon icon={leaf}></IonIcon>
          </IonTabButton>
          <IonTabButton tab="series" href="/series">
            <IonIcon icon={school}></IonIcon>
          </IonTabButton>
          <IonTabButton tab="parametres" href="/settings">
            <IonIcon icon={settingsSharp}></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
