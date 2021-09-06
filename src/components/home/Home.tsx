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

import { getPubPlants, IPlant } from "../plant/plantService";


/**
 * @returns La page Home de l'apprenant.
 */
const Home: React.FC = () => {
    const pubPlants: IPlant[] = getPubPlants();

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
                                    <IonImg src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"></IonImg>
                                    <IonCardHeader>
                                        <IonCardSubtitle>{plant.latin}</IonCardSubtitle>
                                        <IonCardTitle>{plant.name}</IonCardTitle>
                                    </IonCardHeader>

                                    <IonCardContent>
                                        <IonButton routerLink={`/connected/plants/public/${plant.id}`} expand="block" color="success">Voir plus</IonButton>
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