import {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonImg,
    IonButton
} from "@ionic/react";

import "./login.css";


/**
 * @returns La toute première page.
 */
const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Login nya nya</IonTitle>
            </IonHeader>
            <IonContent fullscreen>
                <IonImg className="login-img" src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/AdobeStock_202538386-1024x683.jpeg?raw=true"></IonImg>
                <IonButton href="/visitor" color="success" expand="block">Visiteurs</IonButton>
                <IonButton href="/connected" fill="clear" color="light" expand="block">Connexion</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login;