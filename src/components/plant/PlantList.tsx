import { IonList } from "@ionic/react";
import React, { useEffect, useState } from "react";
import PlantItem from "./PlantItem";
import { Plant } from "./PlantService";
import './plantcss.css';

const Plantlist: React.FC<{ listProps: Plant[], val: string }> = (props) => {

    return (
        <IonList>
            {
                props.listProps.map((plant, id) => <PlantItem val={props.val} key={id} plant={plant} />)
            }
        </IonList>
    )
}

export default Plantlist;