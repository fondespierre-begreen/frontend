import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { arrowBack, pencilOutline } from 'ionicons/icons';

import React, { useEffect, useState } from "react";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";

import { IPlantParams, getPrivPlantById, getPubPlantById } from "./plantService";


/**
 * @returns La fiche complète de la plante sélectionnée
 */
const PlantDetail: React.FC<RouteComponentProps> = ({ match }) => {

    const [plant, setPlant] = useState<any>({});

    let { path, params } = useRouteMatch();
    let p: IPlantParams = params as IPlantParams;

    useEffect(() => {
        if (path === "/connected/plants/public/:id") {
            getPubPlantById(parseInt(p.id)).then(response => setPlant(response));
        } else {
            // getPrivPlantById(parseInt(p.id)).then((response: any) => setPlant(response));
            setPlant(getPrivPlantById(parseInt(p.id)));
        }
    }, []);

    // // personnal
    // console.log(uriList);
    // // /plants/personnal/:id
    // console.log(path);
    // // /plants/personnal/2
    // console.log(url);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        {/* <IonBackButton /> */}
                        {/* <IonButton routerDirection="back" onClick={() => history.goBack()}> */}
                        <IonButton routerDirection="back" routerLink="/connected/plants">
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{plant.name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {
                    plant !== undefined && (
                        <IonCard>
                            <img src={plant.img} />
                            <IonCardHeader>
                                <IonCardSubtitle>{plant.latin}</IonCardSubtitle>
                                <IonCardTitle>{plant.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {plant.description !== null && plant.description}
                            </IonCardContent>
                        </IonCard>
                    )
                }
                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton color="success" routerLink={`/connected/plants/edit/${plant.id}`}>
                        <IonIcon icon={pencilOutline}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default PlantDetail;