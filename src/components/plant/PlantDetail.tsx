import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { IPlantParams, getPrivPlantById, getPubPlantById } from "./PlantService";


const PlantDetail: React.FC = () => {

    const [plant, setPlant] = useState<any>({});

    let { path, url, params } = useRouteMatch();
    let p: IPlantParams = params as IPlantParams;

    console.log(path);

    useEffect(() => {
        if (path === "/plants/public/:id") {
            getPubPlantById(parseInt(p.id)).then(response => setPlant(response));
            console.log(plant);
            console.log(parseInt(p.id));
        } else {
            // console.log(p.id);
            setPlant(getPrivPlantById(parseInt(p.id)))
        }
        // // personnal
        // console.log(uriList);
        // // /plants/personnal/:id
        // console.log(path);
        // // /plants/personnal/2
        // console.log(url);

    }, []);


    return (
        <IonPage>
            <IonContent>
                <IonRouterLink routerLink="/connected">
                    <IonButton>back</IonButton>
                </IonRouterLink>
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