import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRouterLink, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import Plantlist from "./PlantList";
import {getPrivPlants, getPubPlants, Plant } from "./PlantService";

const Plants: React.FC = () => {

    const privPlants: Plant[] = getPrivPlants();
    var pubPlants: any = getPubPlants().then((plants)=> pubPlants = plants)

    const [value, setValue] = useState<string>("personnel");
    const [lists, setLists] = useState<Plant[]>([]);

    /**
     * Check and define the plant list according to the user's choice
     * @param e event
     */
    const checkChanges = (e: any) => {
        let val: string = e.detail.value; //result from clicking on different labels (Personnel, Public)
        if(val !== undefined) {
            setValue(val);
           val === "personnal" ? setLists(privPlants) : setLists(pubPlants);
        }
        console.log(lists)
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
                            <div>
                                <p><Plantlist listProps={lists}/></p>
                            </div>
                             ) : (
                                  <div><Plantlist listProps={lists}/></div> 
                                )
                    }
                </IonContent>
            </IonPage>
            
        </div>
    );
}
export default Plants;