import SeriesItems from '../series/SeriesItems';
import { useState } from 'react';
import { Serie, getSeries } from '../series/SeriesService';
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

const Series: React.FC = () => {

  const [series, setSeries] = useState<Serie[]>([]);

//   useIonViewWillEnter(() => {
//     const srs = getSeries();
//     srs !== undefined && srs.then(datas => setSeries(datas))
//   });

    useIonViewWillEnter(() => {
        const srs = getSeries();
        setSeries(srs);
    });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="series-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>QCM</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
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
