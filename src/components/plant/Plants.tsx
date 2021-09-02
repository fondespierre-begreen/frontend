import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRouterLink, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Plantlist from "./PlantList";
import { getPrivPlants, getPubPlants, Plant } from "./PlantService";

const Plants: React.FC = () => {

    const privPlants: any = getPrivPlants();
    let temp: any = localStorage.getItem('pubPlants')
    const pubPlants: any = JSON.parse(temp);

    const [value, setValue] = useState<string>("personnal");
    const [lists, setLists] = useState<Plant[]>([]);

    useEffect(() => {
        setLists(privPlants); //init private list
    }, [])

    /**
     * Check and define the plant list according to the user's choice (after switching is searching for data)
     * @param e event
     */
    const checkChanges = (e: any) => {
        const val: string = e.detail.value; //result from clicking on different labels (personnal, public)
        if (val !== undefined) {
            setValue(val);
            val === "personnal" ? setLists(privPlants) : setLists(pubPlants);
        }
    }


    return (
        <div>
            <IonPage>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonSegment onIonChange={checkChanges} value={value}>
                            <IonSegmentButton value="personnal">
                                <IonLabel>Personnel</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="public">
                                <IonLabel>Public</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {
                        value === "personnal" ? (
                            <section><Plantlist val={value} listProps={lists} /></section>) : (<div><Plantlist val={value} listProps={lists} /></div>
                        )
                    }
                    {/* <Plantlist val={value} listProps={lists} /> */}
                </IonContent>
            </IonPage>

        </div>
    );
}
export default Plants;