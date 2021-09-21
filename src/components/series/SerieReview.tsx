import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { checkboxOutline, checkmarkOutline, chevronBack, squareOutline } from "ionicons/icons";

import { RouteComponentProps } from "react-router-dom";

import "./serieReview.css"

import { acedIt } from "./mock";
import { useAppSelector } from "../../redux/hooks";



/**
 * @returns Permet de relire un test déjà passé et potentiellement le réinitialiser
 */
const SerieReview: React.FC<RouteComponentProps> = (props) => {
    const series = useAppSelector(state => state.series.series)
    const serieId = useAppSelector(state => state.series.serieId)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerDirection="back" routerLink="/connected/series">
                            <IonIcon icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Relire un test</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    {
                        series.filter(s => s.id === serieId)[0].questions.map((question, idx) => (
                            <div key={idx}>
                                {
                                    question.plant.photos.length !== 0 && (
                                        <div className="serie-img">
                                            <IonImg src={question.plant.photos[0].url} />
                                        </div>
                                    )
                                }
                                <IonCardHeader>
                                    <IonCardTitle>
                                        <p>{question.description}</p>
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonList>
                                        {
                                            question.choices.map((choice, idx) => (
                                                <IonItem key={idx}>
                                                    <IonText className="flexy-text" key={idx} color={
                                                        (choice.plant !== null) ? "secondary" :
                                                            (question.answers[0].description === choice.description && choice.plant === null) ?
                                                                "danger" :
                                                                "dark"
                                                    }>
                                                        <IonLabel>{choice.description}</IonLabel>
                                                        <IonIcon icon={question.answers[0].description === choice.description ? checkmarkOutline : ""} />
                                                    </IonText>
                                                </IonItem>
                                            ))
                                        }
                                    </IonList>
                                </IonCardContent>
                            </div>
                        ))
                    }
                    {
                        series.filter(s => s.id === serieId)[0].total! <= 80 && (
                            <IonButton className="reinit-btn" onClick={() => alert("YOU LOST EVERYTHING ! YOU ARE RUINED !!!")}>Recommencer</IonButton>
                        )
                    }
                </IonCard>
            </IonContent>
        </IonPage >
    );
};

export default SerieReview;