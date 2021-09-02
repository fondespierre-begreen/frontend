import React from 'react';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, useIonViewWillEnter, IonList, IonItem, IonLabel, IonRadio, IonRadioGroup, IonButtons, IonIcon, IonRouterLink } from '@ionic/react';
import { getQuestion } from './QuestionService';
import { Serie } from './SeriesService';
import { chevronBack } from 'ionicons/icons';



const SerieTest: React.FC = () => {


  const [series, setSeries] = useState<Serie[]>([])

  const [selected, setSelected] = useState<string>('biff');

  // Récupère l'id dans l'url pour ensuite afficher le bon n° du QCM  
  const currentId = window.location.pathname.slice(-1)

  let question = getQuestion();
  console.log(question);
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton routerLink="/login" routerDirection="back" fill="clear">
            <IonIcon slot="start" icon={chevronBack} size="large"/>
          </IonButton>
          <IonTitle color="success">QCM n°{currentId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{getQuestion()[0].description} </IonCardTitle> {/* question.description */}
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>

                <IonItem>
                  <IonLabel>Tulipe</IonLabel> {/* choice.description */}
                  <IonRadio slot="start" value="Tulipe" />
                </IonItem>

                <IonItem>
                  <IonLabel>Rose</IonLabel>
                  <IonRadio slot="start" value="Rose" />
                </IonItem>

                <IonItem>
                  <IonLabel>Bambou</IonLabel>
                  <IonRadio slot="start" value="Bambou" />
                </IonItem>

                <IonItem>
                  <IonLabel>Tournesol</IonLabel>
                  <IonRadio slot="start" value="Tournesol" />
                </IonItem>

              </IonRadioGroup>
            </IonList>



            <IonButton color="success" fill="solid">Retour</IonButton> {/*routerLink={`/series/${serie[0].id}/${getQuestion()[0].id}`*/}
            <IonButton color="success" fill="solid">Suivant</IonButton> {/*routerLink={`/series/${serie[0].id}/${getQuestion()[0].id}`*/}
            
          </IonCardContent>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SerieTest;