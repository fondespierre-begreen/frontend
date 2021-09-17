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

import { RouteComponentProps, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";

import { IPlant, putPlant, IPlantParams, getPrivPlantById } from "./plantService";
import { useEffect } from "react";


/**
 * 
 * @param history l'historique du routeur
 * @returns Le formulaire d'ajout d'une plante
 */
const PlantEditCard: React.FC<RouteComponentProps> = ({ history }) => {

    let { params } = useRouteMatch();
    let p: IPlantParams = params as IPlantParams;

    const { register, handleSubmit, reset, setValue } = useForm();

    useEffect(() => {
        const plant: IPlant = getPrivPlantById(parseInt(p.id));
        setValue("name", plant.name);
        setValue("latin", plant.latin);
        setValue("description", plant.description);
    }, [])

    const onSubmit = async (data: any) => {

        const form = new FormData();
        data.file[0] != null ? form.append('file', data.file[0]) : delete data.file[0]
        form.append('id', p.id)
        form.append('name',data.name)
        form.append('latin',data.latin)
        form.append('description',data.description)
        
        await putPlant(form);
        reset(form);

        await history.push("/connected/plants");
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
                    <IonTitle>Modifier une plante</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <IonItem>
                        <input type="file"  {...register("file")}/>
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

export default PlantEditCard;