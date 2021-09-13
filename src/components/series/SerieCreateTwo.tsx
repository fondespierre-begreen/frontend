import React, { useEffect, useState } from "react";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";

import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonThumbnail } from "@ionic/react";
import { getCreateTest, ISeriesParams } from "./seriesService";
import { IPhoto, IPlant } from "../plant/plantService";

import "./serieCreate.css";

interface IChoices {
    description: string;
}

interface IQuestion {
    description: string;
    plant: IPlant;
    choices: IChoices[];
}

interface ITest {
    total: number | null;
    questions: IQuestion[];
}

const SerieCreateTwo: React.FC<RouteComponentProps> = (props) => {

    const { params } = useRouteMatch();
    const p: ISeriesParams = params as ISeriesParams;

    const [test, setTest] = useState<ITest>();
    const [photos, setPhotos] = useState<any>([]);
    const [classPhoto, setClassPhoto] = useState<number>();

    useEffect(() => {
        console.log(getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url);

        setTest(() => getCreateTest());

        const arr = Array.apply(null, Array(4)).map((e, i) => {
            if (getCreateTest().questions[parseInt(p.qId)].plant.photos[i] !== undefined) {
                return getCreateTest().questions[parseInt(p.qId)].plant.photos[i].url
            } else {
                return e;
            }
        })
        setPhotos(arr)
    }, [])


    return (
        <IonPage>
            <IonContent fullscreen>
                <IonList lines="full" class="ion-no-margin">
                    <IonItem>
                        <IonLabel position="stacked">Choix de la photo (facultatif)</IonLabel>
                        <IonGrid>
                            <IonRow>
                                {
                                    photos.map((photo: any, i: number) => {
                                        if (photo !== undefined) {
                                            return (
                                                <IonCol key={i} size="6" className="flexy-col">
                                                    <IonThumbnail onClick={() => setClassPhoto(i)}>
                                                        <IonImg className={classPhoto === i ? "photo chosen-img" : "photo"} src={photo} />
                                                    </IonThumbnail>
                                                </IonCol>
                                            )
                                        } else {
                                            return (
                                                <IonCol key={i} size="6" className="flexy-col">
                                                    <IonThumbnail>
                                                        <IonImg className="photo photo-empty" />
                                                    </IonThumbnail>
                                                </IonCol>
                                            )
                                        }
                                    })
                                }
                                {/* <IonCol size="6">
                            <IonImg className="photo" src={test!.questions![parseInt(p.qId)].plant!.photos![0].url} />
                        </IonCol>
                        <IonCol size="6">
                            <IonImg className="photo" src={getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url} />
                        </IonCol>
                        <IonCol size="6">
                            <IonImg className="photo" src={getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url} />
                        </IonCol>
                        <IonCol size="6">
                            <IonImg className="photo photo-empty" />
                        </IonCol> */}
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Choix du questionnement</IonLabel>
                        <IonSelect interface="popover">
                            <IonSelectOption value="name">Nom</IonSelectOption>
                            <IonSelectOption value="latin">Nom latin</IonSelectOption>
                            <IonSelectOption value="description">Description</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Question</IonLabel>
                        <IonInput type="text" placeholder="Entrez la question ..." />
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Choix</IonLabel>
                        <IonInput type="text" placeholder="Choix 1 ..." />
                        <IonInput type="text" placeholder="Choix 2 ..." />
                        <IonInput type="text" placeholder="Choix 3 ..." />
                        <IonInput type="text" placeholder="Choix 4 ..." />
                    </IonItem>
                </IonList>
                <section className="btn-section">
                    <IonButton color="success">Question suivante</IonButton>
                    <IonButton fill="outline" color="danger">Terminer</IonButton>
                </section>
            </IonContent>
        </IonPage>
    );
};

export default SerieCreateTwo;