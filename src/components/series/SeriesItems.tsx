import {
    IonItem,
    IonLabel,
    IonIcon
    } from '@ionic/react';

  import { ellipseOutline } from 'ionicons/icons';
  import { Serie } from '../series/SeriesService';
  
  interface SerieListProps {
    serie: Serie;
  }
  
  const SerieList: React.FC<SerieListProps> = ({ serie }) => {
    return (
      <IonItem routerLink={`/series/${serie.id}`} detail={false}>
          <IonIcon icon={ellipseOutline} />
          {/* <ion-icon name="heart"></ion-icon> */}
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            QCM {serie.id}
          </h2>
          <h3>Créé le {serie.createdat}</h3>
        </IonLabel>
      </IonItem>
    );
  };
  
  export default SerieList;