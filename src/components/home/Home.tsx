import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonSlide,
    IonSlides,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { useState, useEffect } from "react";

import { getPubPlants, IPlant } from "../plant/plantService";


/**
 * @returns La page Home de l'apprenant.
 */
const Home: React.FC = () => {

    // STILL ISSUES WITH Home.tsx
    // ONLY THE PLANT CARD HAS A PIC
    // AFTER CHANGING TAB IT WORKS
    const [pubPlants, setPubPlants] = useState<IPlant[]>(getPubPlants());

    useEffect(() => {
        setPubPlants(getPubPlants());
    }, [setPubPlants])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Accueil</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonSlides>
                    {
                        pubPlants !== undefined && pubPlants.map((plant, index) => (
                            <IonSlide key={index}>
                                <IonCard>
                                    <IonImg src={plant.photos!.length > 0 ? plant.photos![0].url : ""}></IonImg>
                                    <IonCardHeader>
                                        <IonCardSubtitle>{plant.latin}</IonCardSubtitle>
                                        <IonCardTitle>{plant.name}</IonCardTitle>
                                    </IonCardHeader>

                                    <IonCardContent>
                                        <IonButton routerLink={`/connected/home/public/${plant.id}`} expand="block" color="success">Voir plus</IonButton>
                                        {/* <IonButton routerLink={`/connected/plants/public/${plant.id}`} expand="block" color="success">Voir plus</IonButton> */}
                                    </IonCardContent>
                                </IonCard>
                            </IonSlide>
                        ))
                    }
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default Home;