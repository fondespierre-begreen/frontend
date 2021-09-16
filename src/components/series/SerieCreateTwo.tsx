import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps, useLocation, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";

import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";

import { getCreateTest, ISeriesParams, postNewTest, toTheLocalStorage } from "./seriesService";
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

const SerieCreateTwo: React.FC<RouteComponentProps> = ({ history }) => {

    const { params } = useRouteMatch();
    const p: ISeriesParams = params as ISeriesParams;

    const [test, setTest] = useState<ITest>();
    const radioRef = useRef<HTMLIonRadioGroupElement>(null);

    const { handleSubmit, register, reset, setValue } = useForm();

    const location = useLocation();

    useEffect(() => {
        setTest(getCreateTest());
        console.log("test ", test);

    }, [location]);

    const handleNextQuestion = (data: any) => {
        let filledTest = test;
        if (data.photo) {
            const thePhoto = filledTest?.questions[parseInt(p.qId)]!.plant!.photos!.filter(photo => photo.id === data.photo);

            filledTest!.questions[parseInt(p.qId)].plant.photos = thePhoto;
        } else {
            delete filledTest!.questions[parseInt(p.qId)].plant.photos;
        }

        filledTest!.questions[parseInt(p.qId)].description = data.description;
        filledTest!.questions[parseInt(p.qId)].choices = Array.apply(null, Array(4)).map((e, i) => data[`choice-${i + 1}`]);

        console.log("filledTest ", filledTest);
        console.log("data ", data);

        toTheLocalStorage(filledTest)

        // RESET DOES NOT WORK
        // reset()

        // STILL ISSUES WITH reset ALTERNATIVE
        // RADIO BTN REINITIALIZES ONLY EVERY OTHER TIME
        setValue("choice-1", "");
        setValue("choice-2", "");
        setValue("choice-3", "");
        setValue("choice-4", "");
        setValue("description", "");
        // setValue("photo", -1);

        if (radioRef !== null) {
            radioRef.current!.value = "";
        }

        history.push(`/connected/series/create/one/${parseInt(p.qId) + 1}`);
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Création d'une question</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form onSubmit={handleSubmit(handleNextQuestion)}>
                    <div className="flexy-content">
                        <IonList lines="full">
                            {
                                (test !== undefined) && (test!.questions[parseInt(p.qId)]!.plant.photos === undefined || test!.questions[parseInt(p.qId)]!.plant.photos!.length === 0 ? (
                                    <p>No image available</p>
                                ) : (
                                    <IonItem>
                                        <IonLabel position="stacked">Choix de la photo (facultatif)</IonLabel>
                                        <IonRadioGroup ref={radioRef} className="centered" allowEmptySelection>
                                            <IonGrid>
                                                <IonRow>
                                                    {
                                                        getCreateTest()!.questions[parseInt(p.qId)]!.plant.photos!.map((photo: any, i: number) => (
                                                            <IonCol key={i} size="6">
                                                                <IonItem>
                                                                    <IonRadio {...register("photo")} slot="end" value={photo.id} />
                                                                    {/* <IonThumbnail> */}
                                                                    <IonImg className="photo" src={photo.url} />
                                                                    {/* </IonThumbnail> */}
                                                                </IonItem>
                                                            </IonCol>
                                                        ))
                                                    }
                                                </IonRow>
                                            </IonGrid>
                                        </IonRadioGroup>
                                    </IonItem>
                                ))
                            }
                            {/* {
                                
                            } */}

                            <IonItem>
                                <IonLabel position="floating">Question</IonLabel>
                                <IonInput {...register("description")} type="text" placeholder="Entrez la question ..." />
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Choix</IonLabel>
                                <IonInput {...register("choice-1")} className="serie-correction" type="text" placeholder="Entrez la solution" />
                                <IonInput {...register("choice-2")} className="serie-dud" type="text" placeholder="Choix 2 ..." />
                                <IonInput {...register("choice-3")} className="serie-dud" type="text" placeholder="Choix 3 ..." />
                                <IonInput {...register("choice-4")} className="serie-dud" type="text" placeholder="Choix 4 ..." />
                            </IonItem>
                        </IonList>

                        <section className="btn-section">
                            <article className="btn-article">
                                {/* Envoie vers SerieCreateOne */}
                                <IonButton type="submit" color="success">Question suivante</IonButton>
                                {/* Envoie test */}
                                <IonButton onClick={postNewTest} fill="outline" color="danger">Terminer</IonButton>
                            </article>
                        </section>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default SerieCreateTwo;