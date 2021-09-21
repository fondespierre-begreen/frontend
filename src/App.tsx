import {
  IonApp,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { useEffect } from 'react';
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

/* Components */
import Login from './components/login/Login';
import Visitor from './components/visitor/Visitor';
import Connected from './components/connected/Connected';
import PlantDetail from './components/plant/PlantDetail';

import { initPrivatePlant, initPublicPlant } from "./redux/plantSlice"
import { useAppDispatch, useAppSelector } from './redux/hooks';

import { getPrivPlantById, getPublicPlants } from './components/plant/plantService';
import { getAllSeries } from './components/series/seriesService';
import { initSeries, getTotal, IQuiz } from './redux/seriesSlice';


/**
 * @returns routeur externe dirige vers l'app du promeneur ou bien vers la connection begreen
 */
const App: React.FC = () => {

  /**
   * IF YOU NEED TO ASK WHY THEN RTFD
   * https://redux-toolkit.js.org/tutorials/typescript#project-setup
   */
  const dispatch = useAppDispatch()

  useEffect(() => {
    getPrivPlantById(1)
      .then(data => { dispatch(initPrivatePlant(data)) })
    getPublicPlants()
      .then(data => {
        dispatch(initPublicPlant(data));
      });

    /**
     * récupère tous les tests (passés ou non) avec toutes ses infos (questions, choix, correction, ...)
     */
    getAllSeries()
      .then((data) => {
        const newData = data.map((s: IQuiz) => {
          if (s.questions[0].answers.length !== 0) {
            let correction = 0;
            s.questions.map(question => {
              question.choices.map(choice => {
                if (choice.description === question.answers[0].description) {
                  // console.log(choice);
                  if (choice.plant !== null) {
                    correction += 1;
                  }
                }
              })
            })
            s.total = Math.round(correction / s.questions.length * 100);
            return s;
          } else return s;
        })
        dispatch(initSeries(newData));
      });
  });

  return (
    <IonApp>
      <IonReactRouter>

        <IonRouterOutlet>
          <Route path={`/visitor/public/:id`} component={PlantDetail} />

          <Route exact path="/connected" render={(props) => <Connected {...props} />} />

          <Route exact path="/visitor">
            <Visitor />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>

      </IonReactRouter>
    </IonApp>
  )
};

export default App;
