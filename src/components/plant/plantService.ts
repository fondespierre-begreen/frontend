/**
 * Mock-up data
 */
const privPlants: IPlant[] = [
    {
        id: 1,
        name: "My own Rose",
        latin: "Flos mea",
        description: "string",
        photos: [
            {
                id: 1,
                url: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"
            }
        ]
    },
    {
        id: 2,
        name: "My own tree",
        latin: "Mea arbor",
        description: "string",
        photos: [
            {
                id: 1,
                url: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"
            }
        ]
    },
    {
        id: 3,
        name: "My own mushroom",
        latin: "Fungus mea",
        description: "string",
        photos: [
            {
                id: 1,
                url: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true"
            }
        ]
    }
];

/**
 * Model
 */
export interface IPhoto {
    id?: number;
    url?: string;
}

export interface IPlant {
    id?: number;
    name: string;
    latin: string;
    photos?: any;
    description?: string;
}

export interface IPlantParams {
    id: string
}

const URL = "http://localhost:9090";
const ALEX_ = "http://192.168.1.46:9090";


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
        localStorage.setItem('pubPlants', JSON.stringify([]));
    });

/**
 * WILL NEED TO BE CHANGED FOR A fetch TO DB
 * Mock-up fetch of private plants then set in localStorage
 * followed by its invoke
 * @param privPlants 
 * @returns 
 * /!\ TO BE DELETED /!\
 */
// const initPrivPlant = (privPlants: IPlant[]) => localStorage.setItem('privPlants', JSON.stringify(privPlants));
// initPrivPlant(privPlants);

fetch(`${URL}/learners/1/plants`)
    .then(response => response.json())
    .then(response => localStorage.setItem('privPlants', JSON.stringify(response)))
    .catch(error => console.log(error));



export const getPubPlants = () => {
    let temp: any = localStorage.getItem('pubPlants')
    const pubPlants: any = JSON.parse(temp);
    return pubPlants;
};

export const getPrivPlants = () => {
    let temp: any = localStorage.getItem('privPlants')
    const pubPlants: any = JSON.parse(temp);
    return pubPlants;
};

export const getPubPlantById = (id: number) => {
    return fetch(`${URL}/plants/${id}`)
        .then(response => response.json())
        .then(response => response.photos == null ? response.photo == "" : '')
        .catch(error => console.log(error));
};

/**
 * AT FIRST GLANCE, NEEDS TO BE CHANGED TO A fetch
 * @param id 
 */
export const getPrivPlantById = (id: number) => getPrivPlants().find((plant: IPlant) => plant.id === id);


/**
 * Getting the last id of plants[]
 */
export const lastId = () => {

    return fetch(`${URL}/lastPlant`, { method: "GET"})
    .then(data => data.json());

}


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
 * USING MOCK-UP fetch FOR EDIT PLANT   :(
 * AND REAL localStorage.setItem    ;)
 */
export const putPlant = (data: any) => {

    const prom = fetch(`${URL}/plants/edit`, {
        method: "PATCH",
        headers: {
            'Accept': '*/*',
        },
        body: data
    }).then(resp => resp.json());
    // fetch-like part as above
    // const prom = new Promise((resolve, reject) => {
    //     resolve(data);
    // }).then(resp => {
    //     console.log(".json() part", resp);
    //     return resp;
    // });

    // save-to-localStorage-like part
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
    });
};