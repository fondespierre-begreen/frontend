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
  IonButton,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonIcon
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useLocation, useRouteMatch } from 'react-router-dom';

import { getCheckedChoices, getquestions, getTest, IQuizParams, postSerie } from './seriesService';

import "./seriedetail.css"


/**
 * @returns La vue pour que l'apprenant passe un test
 */
const SerieDetail: React.FC<RouteComponentProps> = () => {
  const { params } = useRouteMatch();

  const seriesId: IQuizParams = params as IQuizParams;
  const questId: IQuizParams = params as IQuizParams;
  const tId = parseInt(seriesId.tId); // 1
  const qId = parseInt(questId.qId); // 0

  const [quiz] = useState<any>(getquestions(tId));
  const [selected, setSelected] = useState<string>();

  const location = useLocation();

  useEffect(() => {
    setSelected("force la variable select a changer // ceci est un commentaire");
  }, [location]);

  /**
   * Enregistre le choice checked
   */
  function registerValue() {
    let choiceValue = document.querySelector('ion-radio-group');

    if (choiceValue?.value !== undefined) {

      const arrayEmpty = localStorage.getItem('checkedChoices');
      const checkChoices = JSON.parse(arrayEmpty!);

      // Ajoute ou écrase la check value au même index que la question dans un tableau
      checkChoices[qId] = choiceValue.value;

      localStorage.setItem('checkedChoices', JSON.stringify(checkChoices));
      // choices = [...choices, choiceValue.value];
      console.log(checkChoices);
    }
  }

  /**
   * select (et donc le radio button) prend la valeur enregistrée (la réponse de l'apprenant)
   */
  const handleOnChange = () => {
    const gChoices = getCheckedChoices();
    setSelected(gChoices[qId]);
  };

  /**
   * Supprime les id des propriétés serie, questions et choices afin de push le tableau dans le back qui va rajouter les id incrémentés
   * @param serie tableau serie
   */
  function cleanSerie(serie: any) {
    delete serie.id;
    serie.questions.map((q: any) => delete q.id);
    serie.questions.map((q: any) => q.choices.map((c: any) => delete c.id));
  }

  const sendTest = () => {
    // Enregistre le choice checked de la dernière question
    registerValue();

    const serie = getTest(tId);


    // Liste des choix checked
    let arrChoicesChecked: any = JSON.parse(localStorage.getItem('checkedChoices')!);
    console.log(arrChoicesChecked);

    // Ajout de l'id du choix correspondant à la réponse de l'user
    serie.questions.map((question: any, i: number) => {
      question.choices.map((choice: any) => {
        if (choice.description === arrChoicesChecked[i]) {
          question.answers[0] = { id: choice.id };
          console.log(choice.id);

          // localStorage.setItem('result', JSON.stringify(serie));
        }
      })
    })

    // Supprime les id du tableau
    cleanSerie(serie);
    console.log(serie);


    // console.log(JSON.stringify(serie));
    let currentSerie = {};
    postSerie(serie)
      .then(serie => currentSerie = serie);
  }

  /**
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
      );

    } else if (qIdCurrent == questions.length - 1) {
      return (
        <div className="buttons">
          <IonButton onClick={registerValue} color="success" routerDirection="back" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Précédent</IonButton>
          <IonButton onClick={sendTest} color="danger" routerLink={`/connected/series/${tId}/quest/${qId}`}>Envoyer</IonButton>
        </div>
      );

    } else {
      return (
        <div className="buttons">
          <IonButton onClick={registerValue} color="success" routerDirection="back" routerLink={`/connected/series/${tId}/quest/${qId - 1}`}>Précédent</IonButton>
          <IonButton onClick={registerValue} color="success" routerLink={`/connected/series/${tId}/quest/${qId + 1}`}>Suivant</IonButton>
        </div>
      );
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
            <IonCardTitle>{quiz !== undefined && <p>{quiz[qId].id}. {quiz[qId].description}</p>}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonRadioGroup value={selected} onIonChange={handleOnChange} allowEmptySelection>

                {quiz !== undefined && quiz[qId].choices.map((c: any, I: any) => (
                  <IonItem key={I}>
                    <IonLabel>{c.description}</IonLabel>
                    <IonRadio className="choices" color="success" slot="end" name="description" value={c.description} />
                  </IonItem>
                ))}
              </IonRadioGroup>
            </IonList>

            {/* Affiches les boutons nécessaires à la navigation entre les questions */}
            {displayButtons(qId, quiz)}

          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage >
  );
};

export default SerieDetail;