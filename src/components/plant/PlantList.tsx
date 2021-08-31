import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRoute, IonRouterLink, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import PlantItem from "./PlantItem";
import { Plant } from "./PlantService";
import './plantcss.css';

const Plantlist: React.FC<{listProps: Plant[]}> = (props) => {

    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        setPlants(props.listProps);
        console.log(props);

    }, [])
    
    return (
        <IonList>
            {
                plants.map((plant, id)=> <PlantItem key={id} plant={plant} /> )
            }
        </IonList>
    )
}

export default Plantlist;