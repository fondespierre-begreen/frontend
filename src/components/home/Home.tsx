import { IonButton, IonContent, IonPage } from "@ionic/react"


/**
 * @returns La page Home de l'apprenant.
 */
const Home: React.FC = () => {
    console.log("home")
    return (
        <IonPage>
            <IonContent>
                <IonButton href="/">back</IonButton>
                <h2>Home</h2>
            </IonContent>
        </IonPage>
    );
};

export default Home;