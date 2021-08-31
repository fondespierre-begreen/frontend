import { Route } from 'react-router-dom';
import { IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

const PlantRouter: React.FC = () => {

    return (
        <div>

            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Segment</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="personel">
                        <IonSegmentButton value="personnel">
                            <IonLabel>Personnel</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="public">
                            <IonLabel>Public</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>

            <IonRouterOutlet>
                <Route exact path="/plants/public">
                    <p>PUBLIC ZZZ</p>
                </Route>
                <Route exact path="/plants/perso">
                    <p>PERSONAL YYY</p>
                </Route>
            </IonRouterOutlet>
        </div>
    );
};

export default PlantRouter;