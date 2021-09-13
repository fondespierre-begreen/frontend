import React, { useEffect, useState } from "react";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";

import { IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonThumbnail } from "@ionic/react";
import { getCreateTest, ISeriesParams } from "./seriesService";
import { IPlant } from "../plant/plantService";

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
    useEffect(() => {
        console.log(getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url);

        setTest(getCreateTest());
    }, [])


    return (
        <IonPage>
            <IonContent fullscreen>
                <IonLabel>Choix de la photo (facultatif)</IonLabel>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg className="photo" src={getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url} />
                        </IonCol>
                        <IonCol>
                            <IonImg className="photo" src={getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url} />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonImg className="photo" src={getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url} />
                        </IonCol>
                        <IonCol>
                            <IonImg className="photo" src={getCreateTest().questions[parseInt(p.qId)].plant.photos[0].url} />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default SerieCreateTwo;