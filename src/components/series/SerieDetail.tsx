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
  IonRadioGroup
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useRouteMatch } from 'react-router-dom';

import { IQuest, getquestions } from './seriesService';

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

  const [quiz, setQuiz] = useState<IQuest[]>();

  const [selected, setSelected] = useState<string>('biff');


  useEffect(() => {
    setQuiz(getquestions(tId));
    console.log(quiz);
  }, []);

  let { url } = useRouteMatch();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/connected/series" />
          </IonButtons>
          <IonTitle>QCM n°{tId}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"></IonImg>
          <IonCardHeader>
            <IonCardTitle>{quiz !== undefined && <p>{quiz[qId].description}</p>}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>


            <IonItem>
              <IonLabel>Biff {quiz !== undefined && <p>{quiz[qId].description}</p>}</IonLabel>
              <IonRadio slot="start" value="biff" />
            </IonItem>

          </IonRadioGroup>
        </IonList>
            <IonButton color="success" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Previous</IonButton>
            <IonButton color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Next</IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default SerieDetail;
