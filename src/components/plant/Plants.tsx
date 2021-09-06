import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonToolbar
} from "@ionic/react";
import { addOutline } from 'ionicons/icons';

import React, { useEffect, useReducer, useState } from "react";
import { RouteComponentProps } from "react-router";

import Plantlist from "./PlantList";
import { getPrivPlants, getPubPlants, IPlant } from "./plantService";


/**
 * @param RouteComponentProps donne accès à l'URL
 * @returns La page des listes de plantes pour l'apprenant; la personnelle et la publique.
 */
const Plants: React.FC<RouteComponentProps> = ({ match }) => {

    const privPlants: IPlant[] = getPrivPlants();
    const pubPlants = getPubPlants();
    const PERSONNAL = "personnal";

    const [value, setValue] = useState<string>(PERSONNAL);

    const initialState = {
        lists: privPlants,
        query: ""
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: any) => {
        let tempLists = value === PERSONNAL ? privPlants : pubPlants;
        dispatch({
            type: 'updateQuery', payload: {
                lists: [...tempLists],
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
    }, [state.query]);

    /**
     * Check and define the plant list according to the user's choice (after switching is searching for data)
     * @param e event
     */
    const checkChanges = (e: any) => {
        const val: string = e.detail.value; //result from clicking on different labels (personnal, public)
        if (val !== undefined) {
            setValue(val);
            val === PERSONNAL ?
                dispatch({ type: 'updateList', payload: [...privPlants] }) :
                dispatch({ type: 'updateList', payload: [...pubPlants] });
        }
    }


    return (
        <div>
            <IonPage>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonSegment onIonChange={checkChanges} value={value}>
                            <IonSegmentButton value={PERSONNAL}>
                                <IonLabel>Personnel</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="public">
                                <IonLabel>Public</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                    <IonToolbar>
                        <IonSearchbar value={state.query} onIonChange={handleChange} />
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {
                        value === PERSONNAL ? (
                            <section>
                                <Plantlist val={value} listProps={state.lists} />
                                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                                    <IonFabButton color="success" routerLink={`${match.url}/create`}>
                                        <IonIcon icon={addOutline}></IonIcon>
                                    </IonFabButton>
                                </IonFab>
                            </section>
                        ) : (
                            <div>
                                <Plantlist val={value} listProps={state.lists} />
                            </div>
                        )
                    }
                </IonContent>
            </IonPage>

        </div>
    );
}
export default Plants;