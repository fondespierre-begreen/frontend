import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { IPlant } from "./plantService";


const PlantItem: React.FC<{ plant: IPlant, val: string }> = (props) => {

  // const [color, setColor] = useState(false)
  let { url } = useRouteMatch();

  const uri: string = `${url}/${props.val}/${props.plant.id}`;

  const [u, setU] = useState()

  useEffect(() => {

    if(props.plant.photos == null || props.plant.photos.length == 0 ){
      props.plant.photos = '';
      setU(props.plant.photos);
    }else {
      setU(props.plant.photos[0].url)
    };

  }, [])
  

  return (
    <IonItem routerLink={uri}>
      <IonAvatar slot="start">
        <img src={u} />
      </IonAvatar>
      <IonLabel>
        <h2>{props.plant.name}</h2>
        <h3>{props.plant.latin}</h3>
      </IonLabel>
    </IonItem>
  )
}
export default PlantItem;