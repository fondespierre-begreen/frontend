import { IonContent, IonHeader, IonList, IonPage, IonTitle } from "@ionic/react";
import React from "react";
import PlantItem from "./plantItem";

const Plantlist: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonTitle></IonTitle>
            </IonHeader>
        <IonContent>
            <IonList>
                <PlantItem />
            </IonList>
        </IonContent>
        </IonPage>
    )
}

export default Plantlist;