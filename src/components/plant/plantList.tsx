import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import PlantItem from "./plantItem";
import { getPlants, Plant } from "./plantService";

const Plantlist: React.FC = () => {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        setPlants(getPlants());
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Plants</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent>
            <IonList>
                {
                    plants.map((plant, id)=> <PlantItem key={id} plant={plant} /> )
                }

            </IonList>
        </IonContent>
        </IonPage>
    )
}

export default Plantlist;