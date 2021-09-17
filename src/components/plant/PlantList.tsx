import { IonList } from "@ionic/react";
import React from "react";
import PlantItem from "./PlantItem";
import { IPlant } from "./plantService";
import './plantcss.css';

const Plantlist: React.FC<{ listProps: IPlant[], val: string }> = (props) => {

    // console.log(props.listProps);

    return (
        <IonList>
            {
                props.listProps.map((plant, id) => <PlantItem val={props.val} key={id} plant={plant} />)
            }
        </IonList>
    )
}

export default Plantlist;