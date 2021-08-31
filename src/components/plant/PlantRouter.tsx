import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonContent
} from '@ionic/react';
import { useState } from 'react';

import Plantlist from './PlantList';

import { getPlants, getPubPlants, Plant } from "./PlantService";

const PlantRouter: React.FC = () => {

    const [state, setstate] = useState<string>("personnel")
    const [lists, setlists] = useState<Plant[]>([])

    const changee = (e: any) => {
        if (e.detail.value !== undefined) {
            setstate(e.detail.value);
            if (e.detail.value === "personnel") { setlists(getPlants()); }
            else { setlists(getPubPlants()); }
        }
    }

    return (
        <IonPage>

            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Segment</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSegment
                        onIonChange={changee}
                        value={state}>
                        <IonSegmentButton value="personnel">
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
                    state === "personnel" ? (
                        <div>
                            <p>perso</p>
                            <Plantlist plantProps={lists} />
                        </div>
                    ) : (
                        <div>
                            <p>pub</p>
                            <Plantlist plantProps={lists} />
                        </div>
                    )
                }
            </IonContent>
        </IonPage>
    );
};

export default PlantRouter;