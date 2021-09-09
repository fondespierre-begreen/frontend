import {
    IonButton,
    IonButtons,
    IonContent,
    IonFabButton,
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
import { arrowBack, image } from "ionicons/icons";

import { RouteComponentProps } from "react-router";
import { useForm } from "react-hook-form";

import { Camera, CameraResultType } from "@capacitor/camera"

import { IPlant, postPlant } from "./plantService";


/**
 * 
 * @param history l'historique du routeur
 * @returns Le formulaire d'ajout d'une plante
 */
const PlantCreateCard: React.FC<RouteComponentProps> = ({ history }) => {

    const takeNudePic = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        })

        const imgUrl = image.webPath

        console.log(imgUrl);

    }

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: IPlant) => {
        const result = await postPlant(data);

        // /!\ IMPORTANT /!\

        // DO NOT FORGET TO UNCOMMENT FOLLOWING LINE
        // WHEN postPlant IS AN ACTUAL fetch AGAIN
        // reset(result);

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
                <IonIcon icon={image}></IonIcon>
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

                <IonFabButton color="success" onClick={takeNudePic} />
            </IonContent>
        </IonPage>
    );
};

export default PlantCreateCard;