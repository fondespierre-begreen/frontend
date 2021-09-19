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

import { chevronBack } from "ionicons/icons";
import { useEffect, useReducer } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateQuery } from "../../redux/plantSlice";


/**
 * @returns L'app du visiteur.
 */
const Visitor: React.FC = () => {
    const dispatch = useAppDispatch()

    const value = useAppSelector(state => state.plant.value);
    const query = useAppSelector(state => state.plant.query);
    const t3mpP0bl1c = useAppSelector(state => state.plant.tempPub);

    const handleChange = (e: any) => {
        dispatch(updateQuery({ value, query: e.detail.value! }));
    };

    useEffect(() => {
        dispatch(updateQuery({ value: "public", query }));
    }, [query]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => {
                            dispatch(updateQuery({ value: "personnal", query: "" }))
                        }} routerDirection="back" routerLink="/">
                            <IonIcon icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Welcome visitor</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar value={query} onIonChange={handleChange} />
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <Plantlist listProps={t3mpP0bl1c} val="public" />
            </IonContent>
        </IonPage>
    );
};

export default Visitor;