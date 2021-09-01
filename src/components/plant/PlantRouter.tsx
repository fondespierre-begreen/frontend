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
import { useEffect, useState } from 'react';

import Plantlist from './PlantList';
import { getPlants, getPubPlants, Plant } from "./PlantService";


/**
 * @returns Soit la liste public ou la liste de l'apprenant.
 */
const PlantRouter: React.FC = () => {

    const [state, setstate] = useState<string>("personnel")
    const [lists, setlists] = useState<Plant[]>()

    useEffect(() => {
        getPlants().then(l => setlists(l))
    }, [])

    const changee = (e: any) => {
        if (e.detail.value !== undefined) {
            setstate(e.detail.value);
            if (e.detail.value === "personnel") { getPlants().then(l => setlists(l)) }
            else { setlists(getPubPlants()); }
        }
    }

    return (
        <IonPage>
            <IonHeader translucent>
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