import {
    IonPage,
    IonHeader,
    IonContent,
    IonButton
} from "@ionic/react";

import "./login.css";


/**
 * @returns La toute première page.
 */
const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="background">
                <div className="flex">
                    <img src="https://raw.githubusercontent.com/fondespierre-begreen/documentation/aa2a5eab5ff070b22b98aaa913b675073b4f26c4/logos/beGreenBlancWeb.svg" alt="begreen" />
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