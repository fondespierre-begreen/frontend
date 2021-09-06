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
            <IonContent fullscreen scrollEvents={false}  className="background">
                <div className="dorine" >
                        <img src="http://image.noelshack.com/fichiers/2021/36/1/1630920868-begreenblancweb.png" alt="begreen" />
                        <div className="btn">
                            <IonButton href="/visitor" fill="solid" color="success" expand="block">Visiteurs</IonButton>
                            <IonButton href="/connected"  fill="outline" color="light" expand="block">Connexion</IonButton>
                        </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login;