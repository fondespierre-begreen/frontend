import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";

const About: React.FC = () => (
    <IonPage>
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
            <p>Bienveue mes merdes</p>
        </IonContent>
    </IonPage>
)
export default About;