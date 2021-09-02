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
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page de connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className="background-container">
            <IonContent fullscreen>
                <IonButton href="/visitor" color="success" expand="block">Visiteurs</IonButton>
                <IonButton href="/connected" fill="clear" color="light" expand="block">Connexion</IonButton>
            </IonContent>
            </div>
        </IonPage>
    )
}

export default Login;