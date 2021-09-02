import { IonAvatar, IonItem, IonLabel, IonRouterLink } from "@ionic/react";
import { } from "process";
import React from "react";
import { Plant } from "./PlantService";

const PlantItem: React.FC<{ plant: Plant, val: string }> = (props) => {

  // const uri: string = "plants/" + (props.val) + "/" + (props.plant.id).toString();
  // const uri: string = `plants/${props.val}/${props.plant.id}`;

  return (
    // <IonRouterLink color="white" href={uri}>
      <IonItem routerLink={`plants/${props.val}/${props.plant.id}`}>
        <IonAvatar slot="start">
          <img src={props.plant.img} />
        </IonAvatar>
        <IonLabel>
          <h2>{props.plant.name}</h2>
          <h3>{props.plant.latin}</h3>
          <p>{props.plant.createdAt}</p>
        </IonLabel>
      </IonItem>
    // </IonRouterLink>
  )
}
export default PlantItem;