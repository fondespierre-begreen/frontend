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

import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import Plantlist from "./PlantList";

import { PERSONNAL } from "./plantService";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { updateQuery } from "../../redux/plantSlice";


/**
 * @param RouteComponentProps donne accès à l'URL
 * @returns La page des listes de plantes pour l'apprenant; la personnelle et la publique.
 */
const Plants: React.FC<RouteComponentProps> = ({ match }) => {

    const dispatch = useAppDispatch()

    const value = useAppSelector(state => state.plant.value);
    const query = useAppSelector(state => state.plant.query);
    const t3mpP0bl1c = useAppSelector(state => state.plant.tempPub);
    const t3mpPr1v4t3 = useAppSelector(state => state.plant.tempPriv);

    useEffect(() => {
        dispatch(updateQuery({ value, query }));
    }, [query]);

    /**
     * SEARCHBAR
     * Met à jour state.plant.query (redux)
     * @param e event onChange sur la searchbar
     */
    const handleChange = (e: any) => {
        /**
         * si value est PERSONNAL on filtre la liste publique
         * sinon la liste privée
         * avec query comme paramètre de filtrage
         */
        dispatch(updateQuery({ value, query: e.detail.value! }));
    };

    /**
     * SEGMENT
     * Check and define the plant list according to the user's choice (after switching is searching for data)
     * @param e result from clicking on different labels (personnal, public)
     */
    const checkChanges = (e: any) => {
        dispatch(updateQuery({ value: e.detail.value!, query: "" }));
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
                        <IonSearchbar value={query} onIonChange={handleChange} />
                    </IonToolbar>
                </IonHeader>
                {
                    value === PERSONNAL ? (
                        <IonContent>
                            <Plantlist val={value} listProps={t3mpPr1v4t3} />
                            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                                <IonFabButton color="success" routerLink={`${match.url}/create`}>
                                    <IonIcon icon={addOutline}></IonIcon>
                                </IonFabButton>
                            </IonFab>
                        </IonContent>
                    ) : (
                        <IonContent>
                            <Plantlist val={value} listProps={t3mpP0bl1c} />
                        </IonContent>
                    )
                }
            </IonPage>
        </div>
    );
}
export default Plants;