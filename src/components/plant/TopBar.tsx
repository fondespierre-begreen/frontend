import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRouterOutlet, IonRow } from "@ionic/react";
import React from "react";
import { Route } from "react-router";
import PlantList from "./PlantList";
import { Plant } from "./PlantService";

const TopBar: React.FC = () => {
    return (
            <IonHeader>
                <IonGrid >
                    <IonRow className="flex padd">
                        <IonCol className="padd">
                            <IonRouterLink color="white" href="/private">
                                <h4 className="list">Private</h4>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol className="padd">
                            <IonRouterLink color="white" href="/public">
                                <h4 className="list">Public</h4>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonHeader>
    )
}
export default TopBar;