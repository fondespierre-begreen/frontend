import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React from "react";
import './parameter.css';

const About: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton routerDirection="back" routerLink="/connected/parameter">
                        <IonIcon icon={chevronBack} />
                    </IonButton>
                </IonButtons>
                <IonTitle color="success">À props</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="cage">
                <p>Concéption et création de l'application <strong>BeGreen</strong> par <strong>BeWeb École du numérique</strong></p>
            </div>
        </IonContent>
    </IonPage>
)
export default About;