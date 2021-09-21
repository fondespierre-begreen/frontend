import { RouteComponentProps } from 'react-router-dom';

import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import SeriesItems from '../series/SeriesItems';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { initTest } from '../../redux/seriesSlice';


/**
 * @returns La liste des tests en mode lecture.
 */
const Series: React.FC<RouteComponentProps> = ({ match, history }) => {
  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.series.series);
  console.log(series);

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="series-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle color="success">QCM</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" color="success">
              QCM
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          {series.map(s => <SeriesItems key={s.id} serie={s} />)}
        </IonList>
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton color="success" onClick={() => {
            // toTheLocalStorage(initialCreateTest)
            dispatch(initTest)
            history.push(`${match.url}/create/one/0`);
          }}>
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Series;
