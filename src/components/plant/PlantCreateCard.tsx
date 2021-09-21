import {
    IonActionSheet,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonTextarea,
    IonTitle,
    IonToolbar
} from "@ionic/react"
import { arrowBack, camera, trash, close } from "ionicons/icons";

import { RouteComponentProps } from "react-router";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../redux/hooks";
import { updatePrivatePlant } from "../../redux/plantSlice";

import { lastId, postPlant } from "./plantService";
import { usePhotoGallery, UserPhoto } from "../../hooks/usePhotoGallery";
import { useEffect, useState } from "react";

import './plantecreatecard.css'

/**
 * 
 * @param history l'historique du routeur
 * @returns Le formulaire d'ajout d'une plante
 */
const PlantCreateCard: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: any) => {

        let temp = localStorage.getItem('CapacitorStorage.photos')
        let url = JSON.parse(temp!)
        console.log(url[0].webviewPath)
        

        let n = 0;
        await lastId().then(id => n = id);
        
        const form = new FormData();
        data.file[0] === undefined ? delete data.file[0] : form.append('file', data.file[0]);
        form.append('id', (n + 1).toString())
        form.append('name', data.name)
        form.append('latin', data.latin)
        form.append('description', data.description)
        form.append('url', url[0].webviewPath)

        console.log(form);
        
        await postPlant(form)
            .then(plantResp => { dispatch(updatePrivatePlant(plantResp)) });
        reset(form);
        

        await history.push("/connected/plants");
    };


    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
    const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();



 

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


                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonGrid>
                        <IonRow>
                            {photos.map((photo, index) => (
                            <IonCol size="6" key={index}>
                                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                            </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid>

                    <IonButton className="photo-button" color="medium" expand="block" onClick={() => takePhoto()}>
                        <IonIcon size="large" slot="icon-only" icon={camera} />
                    </IonButton>

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
                <IonActionSheet
                    isOpen={!!photoToDelete}
                    buttons={[{
                        text: 'Delete',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                        if (photoToDelete) {
                            deletePhoto(photoToDelete);
                            setPhotoToDelete(undefined);
                        }
                    }
                },  {
                    text: 'Cancel',
                    icon: close,
                    role: 'cancel'
                }]}
                    onDidDismiss={() => setPhotoToDelete(undefined)}
                />
            </IonContent>
        </IonPage>
    );
};

export default PlantCreateCard;