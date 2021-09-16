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
        if (plant.photos !== undefined) {
            setValue("img", plant.photos[0].url);
        }
    }, [])

    const onSubmit = async (data: IPlant) => {

        data.id = parseInt(p.id);
        // choix d'écraser va disparaitre
        data.photos = [
            {
                id: 1,
                url: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"
            }
        ];
        console.log(data);

        putPlant(data).then(resp => reset(resp));

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
                    <IonTitle>Modifier une plante</IonTitle>
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

export default PlantEditCard;