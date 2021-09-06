import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonLabel, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonToolbar } from "@ionic/react";

import { addOutline } from 'ionicons/icons';

import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

import Plantlist from "./PlantList";
import { getPrivPlants, IPlant } from "./plantService";

const Plants: React.FC<RouteComponentProps> = ({ match }) => {

    const privPlants: any = getPrivPlants();
    let temp: any = localStorage.getItem('pubPlants')
    const pubPlants: any = JSON.parse(temp);
    const PERSONNAL = "personnal";

    const [value, setValue] = useState<string>(PERSONNAL);
    const [lists, setLists] = useState<IPlant[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLists(privPlants); //init private list
        let tempSearchResult = lists.filter(ele => {
            return ele.name.toLowerCase().indexOf(searchQuery) > -1;
            // ele.name.includes(searchQuery)
        })
        setLists([...tempSearchResult])
    }, [searchQuery])

    /**
     * Check and define the plant list according to the user's choice (after switching is searching for data)
     * @param e event
     */
    const checkChanges = (e: any) => {
        const val: string = e.detail.value; //result from clicking on different labels (personnal, public)
        if (val !== undefined) {
            setValue(val);
            val === PERSONNAL ? setLists(privPlants) : setLists(pubPlants);
        }
    }


    return (
        <div>
            <IonPage>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonSegment onIonChange={checkChanges} value={value}>
                            <IonSegmentButton value={PERSONNAL}>
                                <IonLabel>Personnel</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="public">
                                <IonLabel>Public</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                    <IonToolbar>
                        {/* https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator */}
                        <IonSearchbar value={searchQuery} onIonChange={e => setSearchQuery(e.detail.value!)} />
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {/* <IonRouterOutlet>
                    <Route path={`${match.url}/personnal/:id`} component={PlantDetail} />
                    <Route path={`${match.url}/public/:id`} component={PlantDetail} />
                    <Route path={`${match.url}/:pSlug`} render={(props) => <Plantlist val={value} listProps={lists} {...props} />} />
                </IonRouterOutlet> */}
                    {
                        value === PERSONNAL ? (
                            <section>
                                <Plantlist val={value} listProps={lists} />
                                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                                    <IonFabButton color="success" routerLink={`${match.url}/create`}>
                                        <IonIcon icon={addOutline}></IonIcon>
                                    </IonFabButton>
                                </IonFab>
                            </section>
                        ) : (
                            <div>
                                <Plantlist val={value} listProps={lists} />
                            </div>
                        )
                    }
                </IonContent>
            </IonPage>

        </div>
    );
}
export default Plants;