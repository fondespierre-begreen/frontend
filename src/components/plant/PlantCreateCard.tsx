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
import { lastId, postPlant } from "./plantService";


/**
 * 
 * @param history l'historique du routeur
 * @returns Le formulaire d'ajout d'une plante
 */
const PlantCreateCard: React.FC<RouteComponentProps> = ({ history }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: any) => {
        
        let n = 0;
        await lastId().then(id => n = id);
        
        const form = new FormData();
        data.file[0] === undefined ? delete data.file[0] :  form.append('file',data.file[0]);
        form.append('id', (n+1).toString())
        form.append('name',data.name)
        form.append('latin',data.latin)
        form.append('description',data.description)

        await postPlant(form);
        reset(form);

        await history.push("/connected/plants");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerDirection="back" routerLink="/connected/plants">
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Ajout d'une plante</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <IonItem>
                        <input type="file" {...register("file")} />
                    </IonItem>
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