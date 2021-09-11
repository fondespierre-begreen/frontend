import {
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import { ellipseOutline, checkmarkCircle, removeCircle, closeCircle } from 'ionicons/icons';
import { ISerie } from './seriesService';
import './seriesItems.css'
import { useRouteMatch } from "react-router-dom";


interface SerieItemsProps {
  serie: ISerie;
}



/**
 * @param Serie Un objet contenant les infos de chaque test
 * @returns La liste des tests.
 */
const SerieItems: React.FC<SerieItemsProps> = ({ serie }) => {


  localStorage.setItem('checkedChoices', JSON.stringify([]))




  /**
   * Intègre l'icone et la couleur correspond au QCM
   * @returns 
   */
  function displayIconColor() {
    if (serie.total == null) {
      return <IonIcon slot="end" size="large" className="ellipseoutline" icon={ellipseOutline} />

    } else if (serie.total >= 81 && serie.total <= 100) {
      return <IonIcon slot="end" size="large" className="checkmarkcircle" icon={checkmarkCircle} />

    } else if (serie.total >= 51 && serie.total <= 80) {
      return <IonIcon slot="end" size="large" className="removecircle" icon={removeCircle} />

    } else if (serie.total <= 50) {
      return <IonIcon slot="end" size="large" className="closecircle" icon={closeCircle} />

    }
  }

  let { url } = useRouteMatch();


  return (
    <IonItem routerLink={`${url}/${serie.id}/quest/0`} detail={false}>
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