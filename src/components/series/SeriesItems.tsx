import {
    IonItem,
    IonLabel,
    IonIcon
    } from '@ionic/react';

  import { ellipseOutline, checkmarkCircle, removeCircle, closeCircle } from 'ionicons/icons';
  import { Serie } from '../series/SeriesService';
  import './SeriesItems.css'
  
  interface SerieItemsProps {
    serie: Serie;
  }
  
  const SerieItems: React.FC<SerieItemsProps> = ({ serie }) => {


    /**
     * Intègre l'icone et la couleur correspond au QCM
     * @returns 
     */
    function displayIconColor() {
      if (serie.total == null) {
        console.log("Non fait");
        return <IonIcon slot="end" className="ellipseoutline" icon={ellipseOutline} />

      } else if (serie.total>=81 && serie.total<=100) {
        console.log("90%");
        return <IonIcon slot="end" className="checkmarkcircle" icon={checkmarkCircle} />

      } else if (serie.total>=51 && serie.total<=80) {
        console.log("70%");
        return <IonIcon slot="end" className="removecircle" icon={removeCircle} />

      } else if (serie.total<=50) {
        console.log("40%");
        return <IonIcon slot="end" className="closecircle" icon={closeCircle} />

      }
    }
    

    return (
      <IonItem routerLink={`/series/${serie.id}`} detail={false}>
        {displayIconColor()} 
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
  
  export default SerieItems;