import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { IPlant } from "./plantService";


const PlantItem: React.FC<{ plant: IPlant, val: string }> = (props) => {

  let { url } = useRouteMatch();

  const uri: string = `${url}/${props.val}/${props.plant.id}`;

  return (
    <IonItem routerLink={uri}>
      <IonAvatar slot="start">
        <img src={props.plant.photos !== undefined && props.plant.photos!.length > 0 ? props.plant.photos[0].url : ""} />
      </IonAvatar>
      <IonLabel>
        <h2>{props.plant.name}</h2>
        <h3>{props.plant.latin}</h3>
      </IonLabel>
    </IonItem>
  )
}
export default PlantItem;