import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRoute, IonRouterLink, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import PlantItem from "./PlantItem";
import { Plant } from "./PlantService";
import './plantcss.css';
import TopBar from "./TopBar";

const Plantlist: React.FC<{list: Plant[]}> = (props) => {

    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        setPlants(props.list);
    }, [])

    return (
        <IonPage>
                <TopBar/>
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