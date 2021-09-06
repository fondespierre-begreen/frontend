import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { arrowBack } from 'ionicons/icons';
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { IPlantParams, getPrivPlantById, getPubPlantById } from "./plantService";


/**
 * @returns La fiche complète de la plante sélectionnée
 */
const PlantDetail: React.FC = () => {

    const [plant, setPlant] = useState<any>({});

    let { path, params } = useRouteMatch();
    let p: IPlantParams = params as IPlantParams;

    useEffect(() => {
        if (path === "/connected/plants/public/:id") {
            getPubPlantById(parseInt(p.id)).then(response => setPlant(response));
        } else {
            setPlant(getPrivPlantById(parseInt(p.id)))
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
                        <IonButton routerDirection="back" routerLink="/connected/plants">
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>plantys ...</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {
                    plant !== undefined && (
                        <IonCard>
                            <img src="" />
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
            </IonContent>
        </IonPage>
    )
}

export default PlantDetail;