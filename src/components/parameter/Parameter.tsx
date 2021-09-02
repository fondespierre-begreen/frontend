import { IonButton, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronForward, helpCircleOutline, informationCircleOutline, personCircleOutline } from "ionicons/icons";
import "./parameter.css";



/**
 * @returns Le menu des paramètres
 */
const Parameter: React.FC = () => {




  return (
    <IonPage>
      <IonToolbar>
        <IonButton routerLink="/login" routerDirection="back" fill="clear">
        </IonButton>
        <IonTitle color="success" slot="secondary">Paramètres</IonTitle>
      </IonToolbar>

      <IonContent fullscreen>
        <IonList>
          <IonItem routerLink="/settings/account" detail={false}>
            <IonIcon slot="start" icon={personCircleOutline} size="large" />
            <IonLabel className="ion-text-wrap">
              <h2>
                Account
              </h2>
            </IonLabel>
            <IonIcon slot="end" icon={chevronForward} size="default" />
          </IonItem>

          <IonItem routerLink="/settings/help" detail={false}>
            <IonIcon slot="start" icon={helpCircleOutline} size="large" />
            <IonLabel className="ion-text-wrap">
              <h2>
                Aide
              </h2>
            </IonLabel>
            <IonIcon slot="end" icon={chevronForward} size="default" />
          </IonItem>

          <IonItem routerLink="/settings/about" detail={false}>
            <IonIcon slot="start" icon={informationCircleOutline} size="large" />
            <IonLabel className="ion-text-wrap">
              <h2>
                À propos
              </h2>
            </IonLabel>
            <IonIcon slot="end" icon={chevronForward} size="default" />
          </IonItem>
        </IonList>

        <IonImg className="parametres-img" src="https://github.com/fondespierre-begreen/documentation/blob/main/logos/beGreenSigle.png?raw=true"></IonImg>

        <IonButton href="https://fondespierre.com/nos-poles-de-competences/begreen/" className="site-begreen" fill="clear" expand="block">Site web Fondespierre BeGreen</IonButton>

        <IonButton href="#" fill="clear" expand="block" color="danger">Déconnexion</IonButton>

        </IonContent>
    </IonPage>
  );
};

export default Parameter;