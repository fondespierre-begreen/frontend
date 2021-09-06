import {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonRouterOutlet,
    IonButton
  } from '@ionic/react';
  import React, { useState, useEffect } from 'react';
  import { RouteComponentProps, useRouteMatch, Route } from 'react-router-dom';
  
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
  
    useEffect(() => {
      setQuiz(getquestions(tId));
      console.log(quiz);
    }, []);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/connected/series" />
            </IonButtons>
            <IonTitle>quiz detail</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent>
          <p>hello</p>
          {quiz !== undefined && <p>{quiz[qId].description}</p>}
          <IonButton
            routerLink={`/connected/series/${tId}/quest/${qId - 1}`}
          >
            Previous
          </IonButton>
          <IonButton
            routerLink={`/connected/series/${tId}/quest/${qId + 1}`}
          >
            Next
          </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SerieDetail;
  