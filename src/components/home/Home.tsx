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

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getplantById } from "../../redux/plantSlice";


/**
 * @returns La page Home de l'apprenant.
 */
const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    /**
     * J'ai dû utiliser la publique "officielle" sinon ça casse
     * quand on fait une recherche dans la search bar de Plants.tsx/segment === "public"
     */
    const p0bl1c = useAppSelector(state => state.plant.publicPlant);

    const handleDetail = (id: number) => {
        dispatch(getplantById({ value: "public", id: id }));
    }

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
                        p0bl1c.map((plant, index) => (
                            <IonSlide key={index}>
                                <IonCard>
                                    <IonImg src={plant.photos!.length > 0 ? plant.photos![0].url : ""}></IonImg>
                                    <IonCardHeader>
                                        <IonCardSubtitle>{plant.latin}</IonCardSubtitle>
                                        <IonCardTitle>{plant.name}</IonCardTitle>
                                    </IonCardHeader>

                                    <IonCardContent>
                                        <IonButton
                                            routerLink={`/connected/home/public/${plant.id}`} expand="block"
                                            color="success"
                                            onClick={() => handleDetail(plant.id!)}
                                        >Voir plus</IonButton>
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