import {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar
} from "@ionic/react";


const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Login</IonTitle>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Login
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    )
}

export default Login;