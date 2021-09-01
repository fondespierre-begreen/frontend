import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { currentid, getPrivPlantById, getPubPlantById, uriList } from "./PlantService";

const PlantDetail: React.FC = () => {

    const [plant, setPlant] = useState<any>({});

    useEffect(() => {
        if(uriList === "public") {
            getPubPlantById().then(response => setPlant(response));
        }else{
            setPlant(getPrivPlantById(currentid))
        }
        console.log(uriList);

    }, [{}]);


    return (
        <IonPage>
            <IonContent>
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
            </IonContent>
        </IonPage>
    )
}

export default PlantDetail;