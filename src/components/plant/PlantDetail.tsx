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
    IonSlide,
    IonSlides,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { chevronBack, pencilOutline } from 'ionicons/icons';

import React, { useEffect, useState } from "react";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";


/**
 * @returns La fiche complète de la plante sélectionnée
 */
const PlantDetail: React.FC<RouteComponentProps> = () => {
    const plantDetail = useAppSelector(state => state.plant.detailPlant);

    const [url, setUrl] = useState<any>({});

    let { path } = useRouteMatch();

    useEffect(() => {
        if (path === "/connected/plants/public/:id" ||
            path === "/connected/home/public/:id" ||
            path === "/visitor/public/:id") {
            setUrl(path.slice(0, -11))
        } else {
            setUrl(path.slice(0, -14));
        }
    }, []);


    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerDirection="back" routerLink={url}>
                            <IonIcon icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{plantDetail.name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard >
                    <img src={plantDetail.photos == null ||plantDetail.photos == "" ? "" : plantDetail.photos[0].url} />
                    <IonCardHeader>
                        <IonCardSubtitle>{plantDetail.latin}</IonCardSubtitle>
                        <IonCardTitle>{plantDetail.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {plantDetail.description}
                    </IonCardContent>
                </IonCard>
                {
                    path === "/connected/plants/personnal/:id" && (
                        <IonFab horizontal="end" vertical="bottom" slot="fixed">
                            <IonFabButton color="success" routerLink={`/connected/plants/edit/${plantDetail.id}`}>
                                <IonIcon icon={pencilOutline}></IonIcon>
                            </IonFabButton>
                        </IonFab>
                    )
                }
            </IonContent>
        </IonPage>
    )
}

export default PlantDetail;