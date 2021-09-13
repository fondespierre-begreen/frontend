import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { IPlant } from "./plantService";


const PlantItem: React.FC<{ plant: IPlant, val: string }> = (props) => {

  // const [color, setColor] = useState(false)
  let { url } = useRouteMatch();

  console.log(url);

  const uri: string = `${url}/${props.val}/${props.plant.id}`;

  // if (url === "/connected/series/create/one") {
  //   return (
  //     <IonItem onClick={() => setColor(!color)} color={color ? "success" : ""}>
  //       <IonAvatar slot="start">
  //         <img src={props.plant.photos !== undefined && props.plant.photos!.length > 0 ? props.plant.photos[0].url : ""} />
  //       </IonAvatar>
  //       <IonLabel>
  //         <h2>{props.plant.name}</h2>
  //         <h3>{props.plant.latin}</h3>
  //       </IonLabel>
  //     </IonItem>
  //   );
  // }

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