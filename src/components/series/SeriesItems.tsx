import {
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import { ellipseOutline, checkmarkCircle, removeCircle, closeCircle } from 'ionicons/icons';
import { getSeriesById, ISerie } from './seriesService';
import './seriesItems.css'
import { useRouteMatch } from "react-router-dom";
import { getSeriesIdForReview, IQuiz } from '../../redux/seriesSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


interface SerieItemsProps {
  serie: IQuiz;
}


/**
 * @param Serie Un objet contenant les infos de chaque test
 * @returns La liste des tests.
 */
const SerieItems: React.FC<SerieItemsProps> = ({ serie }) => {
  const dispatch = useAppDispatch();


  /**
   * Intègre l'icone et la couleur correspond au QCM
   * @returns 
   */
  function displayIconColor() {
    if (serie.total == null) {
      return <IonIcon slot="end" size="large" className="ellipseoutline" icon={ellipseOutline} />

    } else if (serie.total >= 79 && serie.total <= 100) {
      return <IonIcon slot="end" size="large" className="checkmarkcircle" icon={checkmarkCircle} />

    } else if (serie.total >= 49 && serie.total <= 78) {
      return <IonIcon slot="end" size="large" className="removecircle" icon={removeCircle} />

    } else if (serie.total <= 48) {
      return <IonIcon slot="end" size="large" className="closecircle" icon={closeCircle} />

    }
  }

  let { url } = useRouteMatch();

  const testUrl = serie.total === null ? `${url}/${serie.id}/quest/0` : `${url}/review/${serie.id}`;

  const handleClick = () => {
    const inits = JSON.stringify([]);
    localStorage.setItem('checkedChoices', inits);
    dispatch(getSeriesIdForReview({ serieId: serie.id, theTotal: serie.total }))
  };

  return (
    <IonItem onClick={handleClick} routerLink={testUrl} detail={false}>
      {displayIconColor()}
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          QCM {serie.id}
        </h2>
        {/* <h3>Créé le {serie.createdat}</h3> */}
      </IonLabel>
    </IonItem>
  );
};

export default SerieItems;