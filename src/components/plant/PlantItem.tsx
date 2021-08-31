import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { Plant } from "./PlantService";


const PlantItem: React.FC<{plant: Plant}> = (props) => {

    return (
        <IonItem>
          <IonAvatar slot="start">
            <img src={props.plant.img} />
          </IonAvatar>
          <IonLabel>
            <h2>{props.plant.name}</h2>
            <h3>{props.plant.latin}</h3>
            <p>{props.plant.createdAt}</p>
          </IonLabel>
        </IonItem>
    )
}
export default PlantItem;