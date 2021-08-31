import { Route } from 'react-router-dom';
import { IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState } from 'react';

const PlantRouter: React.FC = () => {

    const [state, setstate] = useState("personnel")

    return (
        <div>

            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Segment</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSegment
                        onIonChange={e => {
                            if (e.detail.value !== undefined) setstate(e.detail.value);
                        }}
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

            {
                state === "personnel" ? (
                    <p>perso</p>
                ) : (
                    <p>pub</p>
                )
            }
            {/* <Route exact path="/plants/public">
                <p>PUBLIC ZZZ</p>
            </Route>
            <Route exact path="/plants/perso">
                <p>PERSONAL YYY</p>
            </Route> */}
            {/* <IonRouterOutlet>
            </IonRouterOutlet> */}
        </div>
    );
};

export default PlantRouter;