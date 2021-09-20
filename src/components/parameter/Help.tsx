import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonItem, IonList } from "@ionic/react";
import { checkmarkCircle, chevronBack, closeCircle, ellipseOutline, removeCircle } from "ionicons/icons";
import React from "react";
import './../series/SeriesItems';

const Help: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton routerDirection="back" routerLink="/connected/parameter">
                                <IonIcon icon={chevronBack} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle color="success">Aide</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem>
                        {/* <IonIcon slot="start" icon={personCircleOutline} size="large" /> */}
                        <IonTitle className="ion-text-wrap">
                            <h2>Légende QCM</h2>
                        </IonTitle>
                    </IonItem>
                    <br/>
                    <IonList>
                        <IonItem>
                            <IonTitle>A faire</IonTitle>
                            <IonIcon slot="end" size="large" className="ellipseoutline" icon={ellipseOutline} />
                        </IonItem>
                        <IonItem>
                            <IonTitle>81 à 100%</IonTitle>
                            <IonIcon slot="end" size="large" className="checkmarkcircle" icon={checkmarkCircle} />
                        </IonItem>
                        <IonItem>
                            <IonTitle>51 à 80%</IonTitle>
                            <IonIcon slot="end" size="large" className="removecircle" icon={removeCircle} />
                        </IonItem>
                        <IonItem>
                            <IonTitle>&gt;50%</IonTitle>
                            <IonIcon slot="end" size="large" className="closecircle" icon={closeCircle} />
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonContent>
        </IonPage>
    );
}

export default Help;