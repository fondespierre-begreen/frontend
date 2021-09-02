import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from "@ionic/react";
// import { add } from "ionicons/icons"
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

import Plantlist from "./PlantList";
import { getPrivPlants, Plant } from "./PlantService";

const Plants: React.FC<RouteComponentProps> = ({ match }) => {
    console.log("You entered a plant, you naughty boy !!!");


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
                            <section>
                                <Plantlist val={value} listProps={lists} />
                                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                                    <IonFabButton color="success" routerLink={`${match.url}/create`}>
                                        <IonIcon name={arrowBackCircle}></IonIcon>
                                    </IonFabButton>
                                </IonFab>
                            </section>
                        ) : (
                            <div>
                                <Plantlist val={value} listProps={lists} />
                            </div>
                        )
                    }
                    {/* <Plantlist val={value} listProps={lists} /> */}
                </IonContent>
            </IonPage>

        </div>
    );
}
export default Plants;