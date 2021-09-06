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
        <IonPage>
            <IonHeader>
                <img src="http://image.noelshack.com/fichiers/2021/36/1/1630920868-begreenblancweb.png" alt="begreen" />
            </IonHeader>
            <IonContent fullscreen className="background">
                <div className="back container-buttons">
                    <IonButton href="/visitor" fill="solid" color="success" expand="block">Visiteurs</IonButton>
                    <IonButton href="/connected"  fill="outline" color="light" expand="block">Connexion</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login;