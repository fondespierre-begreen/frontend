import { useEffect, useReducer, useState } from "react";
import { RouteComponentProps, useLocation, useRouteMatch } from "react-router-dom";

import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

import { getPubPlants, IPlant } from "../plant/plantService";
import { getCreateTest, ISeriesParams, toTheLocalStorage } from "./seriesService";

import "./serieCreate.css";


/**
 * 
 * @param props navigation
 * @returns La première partie de la création de test (le choix de la plante sur laquelle se basera la question)
 */
const SerieCreateOne: React.FC<RouteComponentProps> = ({ history }) => {
    const { params } = useRouteMatch();
    const p: ISeriesParams = params as ISeriesParams;

    const plantLists = getPubPlants();

    const [color, setColor] = useState<number>(-1);

    const handlePlantChoice = (id: number, plant: IPlant) => {
        setColor(id);

        const createTest = getCreateTest();

        createTest.questions[p.qId] = { plant: plant };
        toTheLocalStorage(createTest);
    }

    const initialState = {
        lists: plantLists,
        query: ""
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: any) => {
        dispatch({
            type: 'updateQuery', payload: {
                lists: plantLists,
                query: e.detail.value!
            }
        });
    };

    function reducer(state: any, action: any) {
        switch (action.type) {
            case 'updateList':
                return { ...state, lists: action.payload };
            case 'updateQuery':
                return { ...action.payload };
            default:
                throw new Error();
        }
    }

    const location = useLocation();

    useEffect(() => {
        let tempSearchResult = state.lists.filter((ele: any) => {
            return ele.name.toLowerCase().indexOf(state.query) > -1;
        });

        dispatch({ type: 'updateList', payload: [...tempSearchResult] });

        console.log("getCreateTest() ", getCreateTest())

    }, [state.query, location])

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
                    <IonSearchbar value={state.query} onIonChange={handleChange} />
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {/* <PlantList listProps={state.lists} val="public" /> */}
                <div className="create-one-flex">
                    <IonList>
                        {
                            state.lists.map((plant: IPlant, id: number) => (
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