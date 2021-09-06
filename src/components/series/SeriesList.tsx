import SeriesItems from '../series/SeriesItems';
import { useState } from 'react';
import { ISerie, getSeries } from './seriesService';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';


/**
 * @returns La liste des tests en mode lecture.
 */
const Series: React.FC = () => {

  const [series, setSeries] = useState<ISerie[]>([]);

    // useIonViewWillEnter(() => {
    //   const srs = getSeries();
    //   srs !== undefined && srs.then(datas => setSeries(datas))
    // });

  useIonViewWillEnter(() => {
    const srs = getSeries();
    setSeries(srs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };
  console.log(series);

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
      </IonContent>
    </IonPage>
  );
};

export default Series;
