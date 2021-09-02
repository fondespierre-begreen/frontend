import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonTextarea } from "@ionic/react"
import { RouteComponentProps } from "react-router";
import { useForm } from "react-hook-form";
import { Plant, postPlant } from "./PlantService";


const PlantCreateCard: React.FC<RouteComponentProps> = ({ match }) => {
    console.log("hello new plant")
    console.log(match.url);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: Plant) => {
        postPlant(data);
    };

    return (
        <IonPage>
            <IonContent>
                <IonButton routerDirection="back" routerLink="/connected/plants">Back to login</IonButton>
                <p>Here comes a form to create a new plant card</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonItem>
                        <IonLabel>Nom commun</IonLabel>
                        <IonInput {...register("name")} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Nom latin</IonLabel>
                        <IonInput {...register("latin")} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Description</IonLabel>
                        <IonTextarea {...register("description")}></IonTextarea>
                    </IonItem>
                    <IonButton color="success" type="submit">Envoyez</IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default PlantCreateCard;