import {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonImg,
    IonButton
} from "@ionic/react";
import { useRouteMatch } from "react-router";

import "./login.css";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Login nya nya</IonTitle>
            </IonHeader>
            <IonContent fullscreen>
                <IonImg className="login-img" src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/AdobeStock_202538386-1024x683.jpeg?raw=true"></IonImg>
                <IonButton href="/visitor">Visitor</IonButton>
                <IonButton href="/connected">Connexion</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login;