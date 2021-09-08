import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonButton,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonIcon,
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useRouteMatch } from 'react-router-dom';

import { getquestions } from './seriesService';
import "./seriedetail.css"
import { useForm } from "react-hook-form";


interface IQuizParams {
  qId: string;
  tId: string;
}

const SerieDetail: React.FC<RouteComponentProps> = () => {
  let { params } = useRouteMatch();

  let seriesId: IQuizParams = params as IQuizParams;
  let questId: IQuizParams = params as IQuizParams;


  const tId = parseInt(seriesId.tId);
  const qId = parseInt(questId.qId);

  const [quiz, setQuiz] = useState<any>();

  const [selected, setSelected] = useState<string>('biff');

  // let choices = getquestions(tId)[qId].choices

  // let serieQuestions = getquestions(tId)
  
  

  useEffect(() => {
    // setQuiz(getquestions(tId));
    console.log(quiz);
    
  }, []);


  const [value, setvalue] = useState<string>()



  function registerValue(e: any) {
    let test = localStorage.getItem('test')   

    console.log(test + "register");
    
    
  }




  /**
   * 
   * @param qIdCurrent Id courant de la question
   * @param questions Liste des questions
   * @returns Les boutons nécessaires à la navigation entre les questions
   */
  function displayButtons(qIdCurrent: number, questions: any) {



    if (qIdCurrent == 0) {
      return (
        <div className="button-next">
          <IonButton onClick={registerValue}  color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
        </div>
      )

    } else if (qIdCurrent == questions.length - 1) {
      return (
        <div className="buttons">
          <IonButton color="success" routerDirection="back" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Précédent</IonButton>
          <IonButton type="submit" color="danger" routerLink={`/connected/series/${tId}/quest/${qId}`}>Envoyer</IonButton>
        </div>
      )

    } else {
      return (
        <div className="buttons">
          <IonButton color="success" routerDirection="back" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Précédent</IonButton>
          <IonButton  color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
        </div>
      )
    }
  }

  const {register, handleSubmit} = useForm()


  const onSubmit = (d: Array<[]>) => console.log(JSON.stringify(d))

  return (
    <IonPage>

    </IonPage>
  );
};

export default SerieDetail;
