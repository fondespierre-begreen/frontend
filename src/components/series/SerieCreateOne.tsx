import { useEffect, useReducer, useState } from "react";
import { RouteComponentProps, useLocation, useRouteMatch } from "react-router-dom";

import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

import { IPlant } from "../plant/plantService";
import { getCreateTest, ISeriesParams, toTheLocalStorage } from "./seriesService";

import "./serieCreate.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateQuery } from "../../redux/plantSlice";
import { addPlantToQuestion } from "../../redux/seriesSlice";


/**
 * 
 * @param props navigation
 * @returns La première partie de la création de test (le choix de la plante sur laquelle se basera la question)
 */
const SerieCreateOne: React.FC<RouteComponentProps> = ({ history }) => {
    const { params } = useRouteMatch();
    const p: ISeriesParams = params as ISeriesParams;

    const [color, setColor] = useState<number>(-1);

    const location = useLocation();

    const dispatch = useAppDispatch()

    const value = useAppSelector(state => state.plant.value);
    const query = useAppSelector(state => state.plant.query);
    const t3mpP0bl1c = useAppSelector(state => state.plant.tempPub);

    const handlePlantChoice = (id: number, plant: IPlant) => {
        setColor(id);

        // const createTest = getCreateTest();

        // createTest.questions[p.qId] = { plant: plant };
        // toTheLocalStorage(createTest);
        dispatch(addPlantToQuestion({ id: parseInt(p.qId), plant }))
    }

    const handleChange = (e: any) => {
        dispatch(updateQuery({ value, query: e.detail.value! }));
    };

    useEffect(() => {
        dispatch(updateQuery({ value: "public", query }));
    }, [query, location]);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerDirection="back" routerLink="/connected/series">
                            <IonIcon icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Choisissez une plante pour votre question</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar value={query} onIonChange={handleChange} />
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {/* <PlantList listProps={state.lists} val="public" /> */}
                <div className="create-one-flex">
                    <IonList>
                        {
                            t3mpP0bl1c.map((plant: IPlant, id: number) => (
                                <IonItem key={id} onClick={() => handlePlantChoice(id, plant)} color={color === id ? "success" : ""}>
                                    <IonAvatar slot="start">
                                        <img src={plant.photos !== undefined && plant.photos!.length > 0 ? plant.photos[0].url : ""} />
                                    </IonAvatar>
                                    <IonLabel>
                                        <h2>{plant.name}</h2>
                                        <h3>{plant.latin}</h3>
                                    </IonLabel>
                                </IonItem>
                            ))
                        }
                    </IonList>
                    <div className="create-test-btn-to-par-two">
                        <IonButton
                            onClick={() => {
                                setColor(-1)
                                history.push(`/connected/series/create/two/${p.qId}`)
                            }}
                            fill="solid"
                            disabled={color === -1 && true}>
                            Suivant
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default SerieCreateOne;