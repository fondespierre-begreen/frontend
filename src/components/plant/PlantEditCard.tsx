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

import { useEffect } from "react";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { putPrivatePlants } from "../../redux/plantSlice";

import { putPlant, IPlantParams } from "./plantService";


/**
 * 
 * @param history l'historique du routeur
 * @returns Le formulaire d'ajout d'une plante
 */
const PlantEditCard: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useAppDispatch()
    const plantDetail = useAppSelector(state => state.plant.detailPlant);

    let { params } = useRouteMatch();
    let p: IPlantParams = params as IPlantParams;

    const { register, handleSubmit, reset, setValue } = useForm();

    const link = `/connected/plants${p.id}`;


    useEffect(() => {
        setValue("name", plantDetail.name);
        setValue("latin", plantDetail.latin);
        setValue("description", plantDetail.description);
    }, [])

    const onSubmit = async (data: any) => {

        const form = new FormData();
        data.file[0] != null ? form.append('file', data.file[0]) : delete data.file[0]
        form.append('id', p.id)
        form.append('name', data.name)
        form.append('latin', data.latin)
        form.append('description', data.description)

        await putPlant(form)
            .then(data => { dispatch(putPrivatePlants(data)) });
        reset(form);

        await history.push("/connected/plants");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerDirection="back" routerLink={`/connected/plants/personnal/${p.id}`}>
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Modifier une plante</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <IonItem>
                        <input type="file"  {...register("file")} />
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