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
    photos?: IPhoto[];
    description?: string;
}

export interface IPlantParams {
    id: string
}

const URL = "http://localhost:9090";

// const ALEX_ = "http://192.168.1.46:9090";
//informations
// const find = window.location.pathname;
// export const currentid = parseInt(find.slice(-1));
// export const uriList = find.slice(8, find.length - 2);

// const URL = "http://192.168.1.46:9090";


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
// fetch(`${URL}/plants`)
//     .then(response => response.json())
//     .then(response => localStorage.setItem('pubPlants', JSON.stringify(response)))
//     .catch(error => console.log(error));

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

export const getPubPlantById = (plantId: number) => {
    return fetch(`${URL}/plants/${plantId}`)
        .then(response => response.json())
        .catch(error => console.log(error));
};

/**
 * AT FIRST GLANCE, NEEDS TO BE CHANGED TO A fetch
 * @param id 
 */
export const getPrivPlantById = (id: number) => getPrivPlants().find((plant: IPlant) => plant.id === id);

/**
 * MOCK-UP
 * POST TO FAKE DB
 * THEN localStorage.setItem privPlants
 * @param data 
 * @returns 
 * /!\ TO BE DELETED /!\
 */
// export const postPlant = (data: IPlant) => {
//     const prom = new Promise((resolve, reject) => {
//         console.log("data is fetch POST to DB !");
//         const idData: IPlant = data;
//         idData.id = getPrivPlants().length + 1;
//         idData.img = "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true";
//         console.log(idData);

//         resolve(idData);
//     }).then(resp => {
//         console.log(".json() part", resp);
//         return resp;
//     });

//     prom.then((plantResp: any) => {
//         const prevPlants = localStorage.getItem('privPlants');
//         let oldPlants: IPlant[] = [];
//         if (prevPlants !== null) {
//             oldPlants = JSON.parse(prevPlants);
//         }
//         oldPlants.push(plantResp)
//         localStorage.setItem('privPlants', JSON.stringify(oldPlants))
//     });

//     return prom;
// }

/**
 * Ajoute une plante à la liste publique en DB
 * puis ajoute l'objet retourné au localStorage pubPlants
 * @param data 
 */
export const postPlant = (data: IPlant) => {
    data.photos = [
        { url: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true" }
    ];
    const prom = fetch(`${URL}/plants/add/1`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json());

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
export const putPlant = (data: IPlant) => {
    const prom = fetch(`${URL}/plants/edit`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json());

    prom.then((plantResp: any) => {
        const prevPlants = localStorage.getItem('privPlants');

        console.log(prevPlants);

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