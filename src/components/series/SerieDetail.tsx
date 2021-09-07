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

import { IQuest, getquestions } from './seriesService';
import "./seriedetail.css"
import { useForm } from "react-hook-form";


interface IQuizParams {
  qId: string;
  tId: string;
}

const SerieDetail: React.FC<RouteComponentProps> = () => {
  let { params } = useRouteMatch();
  const { register, handleSubmit, reset } = useForm();

  let seriesId: IQuizParams = params as IQuizParams;
  let questId: IQuizParams = params as IQuizParams;


  const tId = parseInt(seriesId.tId);
  const qId = parseInt(questId.qId);

  const [quiz, setQuiz] = useState<IQuest[]>();

  const [selected, setSelected] = useState<string>('biff');

  let choices = getquestions(tId)[qId].choices

  let serieQuestions = getquestions(tId)

  useEffect(() => {
    setQuiz(getquestions(tId));
  }, []);




  /**
   * 
   * @param qIdCurrent Id courant de la question
   * @param questions Liste des questions
   * @returns Les boutons nécessaires à la navigation entre les questions
   */
  function displayButtons(qIdCurrent: number, questions: IQuest[]) {
    if (qIdCurrent == 0) {
      return (
        <div className="button-next">
          <IonButton color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
        </div>
      )

    } else if (qIdCurrent == questions.length - 1) {
      return (
        <div className="buttons">
          <IonButton color="success" routerDirection="back" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Précédent</IonButton>
          <IonButton color="danger" routerLink={`/connected/series/${tId}/quest/${qId}`}>Envoyer</IonButton>
        </div>
      )

    } else {
      return (
        <div className="buttons">
          <IonButton color="success" routerDirection="back" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Précédent</IonButton>
          <IonButton color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
        </div>
      )
    }
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* <IonBackButton /> */}
            {/* <IonButton routerDirection="back" onClick={() => history.goBack()}> */}
            <IonButton size="large" routerDirection="back" routerLink="/connected/series">
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonTitle color="success">QCM n°{tId}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"></IonImg>
          <IonCardHeader>
            <IonCardTitle>{quiz !== undefined && <p>{quiz[qId].description}</p>}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonList>
                <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>

                  {choices.map((c, i) => (
                    <IonItem key={i}>
                      <IonLabel>{c.description}</IonLabel>
                      <IonRadio color="success" slot="start" value={c.description} />
                    </IonItem>
                  ))}
                </IonRadioGroup>
            </IonList>
            
            {/* Affiches les boutons nécessaires à la navigation entre les questions */}
            {displayButtons(qId, serieQuestions)}

            </form>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default SerieDetail;
