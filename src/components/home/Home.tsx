import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonRefresher, IonRefresherContent, IonSlide, IonSlides, IonTitle, IonToolbar } from "@ionic/react"


/**
 * @returns La page Home de l'apprenant.
 */
const Home: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Accueil</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonSlides>
                    <IonSlide>
                        <IonCard>
                            <IonImg src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"></IonImg>
                            <IonCardHeader>
                                <IonCardSubtitle>Nom latin plante</IonCardSubtitle>
                                <IonCardTitle>Nom plante</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                <IonButton href="#" expand="block" color="success">Voir plus</IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>

    );
};

export default Home;