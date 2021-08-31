import {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonImg
} from "@ionic/react";

import "./Login.css";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Login nya nya</IonTitle>
            </IonHeader>
            <IonContent fullscreen>
                <IonImg className="login-img" src="https://github.com/fondespierre-begreen/documentation/blob/main/photos/AdobeStock_202538386-1024x683.jpeg?raw=true"></IonImg>
            </IonContent>
        </IonPage>
    )
}

export default Login;