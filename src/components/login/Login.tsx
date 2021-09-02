import {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonImg,
    IonButton,
    IonToolbar
} from "@ionic/react";

import "./login.css";


/**
 * @returns La toute première page.
 */
const Login: React.FC = () => {
    return (
        <IonPage >
            <IonImg className="background-container"></IonImg>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page de connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent  fullscreen>
                <IonButton href="/visitor" color="success" expand="block">Visiteurs</IonButton>
                <IonButton href="/connected" fill="clear" color="success" expand="block">Connexion</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login;