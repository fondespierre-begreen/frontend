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


  const tId = parseInt(seriesId.tId); // 1
  const qId = parseInt(questId.qId); // 0

  const [quiz, setQuiz] = useState<any>();

  const [selected, setSelected] = useState<string>('biff');

  // let choices = getquestions(tId)[qId].choices

  // let serieQuestions = getquestions(tId)



  useEffect(() => {
    setQuiz(getquestions(tId));
    // index à 0 et qId est ..
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
          <IonButton onClick={registerValue} color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
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
          <IonButton color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
        </div>
      )
    }
  }

  const { register, handleSubmit } = useForm()


  const onSubmit = (d: Array<[]>) => console.log(JSON.stringify(d))

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
                <IonRadioGroup>

                  {quiz !== undefined && quiz[qId].choices.map((c: any, I: any) => (
                    <IonItem key={I}>
                      <IonLabel>{c.description}</IonLabel>
                      <IonRadio className="choices" color="success" slot="end" {...register("description")} value={c.description} />
                    </IonItem>
                  ))}
                </IonRadioGroup>
              </IonList>

              {/* Affiches les boutons nécessaires à la navigation entre les questions */}
              {displayButtons(qId, quiz)}

            </form>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage >
  );
};

export default SerieDetail;
