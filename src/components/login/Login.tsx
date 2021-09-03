import {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonImg,
    IonButton,
    IonToolbar,
    IonButtons
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
            <IonContent fullscreen >
                <IonToolbar className="container-buttons">
                        <IonButton href="/visitor" color="success" expand="block">Visiteurs</IonButton>
                        <IonButton href="/connected" fill="clear" color="success" expand="block">Connexion</IonButton>
                </IonToolbar>
            </IonContent>
        </IonPage>
    )
}

export default Login;