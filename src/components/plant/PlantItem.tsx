import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import { useRouteMatch } from "react-router-dom";

import { useAppDispatch } from "../../redux/hooks";
import { getplantById } from "../../redux/plantSlice";

import { IPlant } from "./plantService";


const PlantItem: React.FC<{ plant: IPlant, val: string }> = (props) => {
  let { url } = useRouteMatch();

  const uri: string = `${url}/${props.val}/${props.plant.id}`;

  const dispatch = useAppDispatch()

  const handleDetail = () => {
    dispatch(getplantById({ value: props.val, id: props.plant.id! }));
  }

  return (
    <IonItem routerLink={uri} onClick={handleDetail}>
      <IonAvatar slot="start">
        <img src={(props.plant.photos.length === 0) ? "" : props.plant.photos[0].url} />
      </IonAvatar>
      <IonLabel>
        <h2>{props.plant.name}</h2>
        <h3>{props.plant.latin}</h3>
      </IonLabel>
    </IonItem>
  )
}
export default PlantItem;