import { IonList } from "@ionic/react";

import PlantItem from "./PlantItem";
import { Plant } from "./PlantService";


/**
 * 
 * @param plantProps Le tableau d'objet Plant
 * @returns La liste de toute les plantes.
 */
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