import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from "@ionic/react"


/**
 * @returns La page Home de l'apprenant.
 */
const Home: React.FC = () => {
    console.log("home")


    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };


    return (


        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Accueil</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large" color="success">
                            Accueil
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton href="/">Login page</IonButton>
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


            </IonContent>
        </IonPage>

    );
};

export default Home;