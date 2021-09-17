/**
 * Model
 */
export interface IPhoto {
    id?: number;
    url?: string;
}

export interface IPlant {
    id?: number;
    name?: string;
    latin?: string;
    photos?: any;
    description?: string;
}

export interface IPlantParams {
    id: string
}

const URL = "http://localhost:9090";


/**
 * Repository
 */
/**
 * Initialise le localStorage pour la liste de plante publique
 */
fetch(`${URL}/plants`)
    .then(response => response.json())
    .then(response => localStorage.setItem('pubPlants', JSON.stringify(response)))
.catch(error => {
    console.log(error);
    // localStorage.setItem('pubPlants', JSON.stringify([]));
});





/**
 * Ajoute une plante à la liste publique en DB
 * puis ajoute l'objet retourné au localStorage pubPlants
 * @param data 
 */
 export const postPlant = (data: any) => {

    const prom = fetch(`${URL}/plants/add/1`, {
        method: "POST",
        headers: {
            'Accept': '*/*',
        },
        body: data
    }).then(resp => resp.json())
    
    prom.then(plantResp => {
        const prevPlants = localStorage.getItem('privPlants');
        let oldPlants: IPlant[] = [];
        if (prevPlants !== null) {
            oldPlants = JSON.parse(prevPlants);
            oldPlants.push(plantResp)
        }
        localStorage.setItem('privPlants', JSON.stringify(oldPlants))
    });

    return prom;    
}

/**
 * patch d'une plante et mise à jour du localStorage
 */
 export const putPlant = (data: any) => {

    const prom = fetch(`${URL}/plants/edit`, {
        method: "PATCH",
        headers: {
            'Accept': '*/*',
        },
        body: data
    }).then(resp => resp.json());

    prom.then((plantResp: any) => {
        const prevPlants = localStorage.getItem('privPlants');

        let oldPlants: IPlant[] = [];
        let updatedPlants;
        if (prevPlants !== null) {
            oldPlants = JSON.parse(prevPlants);

            // Au lieu d'écraser changer juste la donnée differente
            updatedPlants = oldPlants.map(p => {
                if (plantResp.id === p.id) return plantResp;
                return p;
            })
        }
        localStorage.setItem('privPlants', JSON.stringify(updatedPlants))

        return plantResp;
    });

    return prom;
};

/**
 * Get a plant by id
 * @param id 
 * @returns 
 */
export const getPubPlantById = (id: number) => {
    return fetch(`${URL}/plants/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error));
};

/**
 * Getting the last id of plants[]
 */
 export const lastId = () => {

    return fetch(`${URL}/lastPlant`, { method: "GET"})
    .then(data => data.json());

}


export const getPubPlants = () => {
    let temp: any = localStorage.getItem('pubPlants')
    const pubPlants: any = JSON.parse(temp);
    return pubPlants;
};

/**
 * Priv plant by userid
 * @param id 
 */
export const getPrivPlantById = (id: number) => {

    const prom = fetch(`${URL}/learners/${id}/plants`)
    .then(response => response.json());

    prom.then(response => localStorage.setItem('privPlants', JSON.stringify(response)))
    .catch(error => console.log(error));

    return prom;

}

getPrivPlantById(1);

export const getPrivPlants = () => {
    let temp: any = localStorage.getItem('privPlants')
    const privPlant: any = JSON.parse(temp);
    return privPlant;
};

export const privPlantByPlantId = (plant_id : number) => {
    let temp = localStorage.getItem('privPlants');
    const privPlants = JSON.parse(temp!);

    return privPlants.filter((p: any)=> p.id === plant_id)[0];
}






