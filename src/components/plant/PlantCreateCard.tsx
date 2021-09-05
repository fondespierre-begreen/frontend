import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTextarea,
    IonTitle,
    IonToolbar
} from "@ionic/react"
import { arrowBack } from "ionicons/icons";

import { RouteComponentProps } from "react-router";
import { useForm } from "react-hook-form";

import { Plant, postPlant } from "./PlantService";


/**
 * 
 * @param history l'historique du routeur
 * @returns Le formulaire d'ajout d'une plante
 */
const PlantCreateCard: React.FC<RouteComponentProps> = ({ history }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: Plant) => {
        const result = await postPlant(data);
        reset(result);
        history.push("/connected/plants");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        {/* <IonBackButton defaultHref="/connected/plants" /> */}
                        <IonButton routerDirection="back" routerLink="/connected/plants">
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Ajout d'une plante</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
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