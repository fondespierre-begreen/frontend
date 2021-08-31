import { IonList } from "@ionic/react";

import PlantItem from "./PlantItem";

import { Plant } from "./PlantService";

const Plantlist: React.FC<{ plantProps: Plant[] | undefined }> = ({ plantProps }) => {

    return (
        <IonList>
            {
                plantProps !== undefined && plantProps.map((plant, id) => <PlantItem key={id} plant={plant} />)
            }
        </IonList>
    )
}

export default Plantlist;