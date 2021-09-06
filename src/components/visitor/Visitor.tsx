import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/react"

import Plantlist from "../plant/PlantList";

import { getPubPlants } from "../plant/plantService";
import { chevronBack } from "ionicons/icons";
import { useEffect, useReducer } from "react";


/**
 * @returns L'app du visiteur.
 */
const Visitor: React.FC = () => {
    const plantLists = getPubPlants();

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

    useEffect(() => {
        let tempSearchResult = state.lists.filter((ele: any) => {
            return ele.name.toLowerCase().indexOf(state.query) > -1;
        });

        dispatch({ type: 'updateList', payload: [...tempSearchResult] });
    }, [state.query])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerDirection="back" routerLink="/">
                            <IonIcon icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Welcome visitor</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar value={state.query} onIonChange={handleChange} />
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <Plantlist listProps={state.lists} val="public" />
            </IonContent>
        </IonPage>
    );
};

export default Visitor;