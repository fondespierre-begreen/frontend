import React from "react";
import { IonPage, IonContent, IonIcon, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from "@ionic/react";
import { personCircleOutline, chevronForward, arrowBack } from "ionicons/icons";

const Account: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton routerDirection="back" routerLink="/connected/parameter">
                                <IonIcon icon={arrowBack} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle color="success">Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem>
                        <IonIcon slot="start" icon={personCircleOutline} size="large" />
                        <IonLabel className="ion-text-wrap">
                            <h2>beGreen.fondes@gmail.com</h2>
                        </IonLabel>
                    </IonItem>
                </IonContent>
            </IonContent>
        </IonPage>
    );
}
export default Account;