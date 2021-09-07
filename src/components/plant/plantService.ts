/**
 * Mock-up data
 */
const privPlants: IPlant[] = [
    {
        id: 1,
        name: "My own Rose",
        latin: "Flos mea",
        description: "string",
        img: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true",
    },
    {
        id: 2,
        name: "My own tree",
        latin: "Mea arbor",
        description: "string",
        img: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true",
    },
    {
        id: 3,
        name: "My own mushroom",
        latin: "Fungus mea",
        description: "string",
        img: "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true",
    }
];

/**
 * Model
 */
export interface IPlant {
    id?: number;
    name: string;
    latin: string;
    img?: string;
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
    .catch(error => console.log(error));

/**
 * WILL NEED TO BE CHANGED FOR A fetch TO DB
 * Mock-up fetch of private plants then set in localStorage
 * followed by its invoke
 * @param privPlants 
 * @returns 
 * /!\ TO BE DELETED /!\
 */
const initPrivPlant = (privPlants: IPlant[]) => localStorage.setItem('privPlants', JSON.stringify(privPlants));

initPrivPlant(privPlants);


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
export const postPlant = (data: IPlant) => {
    const prom = new Promise((resolve, reject) => {
        console.log("data is fetch POST to DB !");
        const idData: IPlant = data;
        idData.id = getPrivPlants().length + 1;
        idData.img = "https://github.com/fondespierre-begreen/documentation/blob/main/photos/marguerite-729510_1920.jpg?raw=true";
        console.log(idData);

        resolve(idData);
    }).then(resp => {
        console.log(".json() part", resp);
        return resp;
    });

    prom.then((plantResp: any) => {
        const prevPlants = localStorage.getItem('privPlants');
        let oldPlants: IPlant[] = [];
        if (prevPlants !== null) {
            oldPlants = JSON.parse(prevPlants);
        }
        oldPlants.push(plantResp)
        localStorage.setItem('privPlants', JSON.stringify(oldPlants))
    });

    return prom;
}

/**
 * Ajoute une plante à la liste publique en DB
 * puis ajoute l'objet retourné au localStorage pubPlants
 * @param data 
 */
// export const postPlant = (data: IPlant) => {
//     const prom = fetch(`${URL}/plants`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(resp => resp.json());

//     prom.then(plantResp => {
//         const prevPlants = localStorage.getItem('pubPlants');
//         let oldPlants: IPlant[] = [];
//         if (prevPlants !== null) {
//             oldPlants = JSON.parse(prevPlants);
//             oldPlants.push(plantResp)
//         }
//         localStorage.setItem('pubPlants', JSON.stringify(oldPlants))
//     });

//     return prom;
// }

/**
 * USING MOCK-UP fetch FOR EDIT PLANT   :(
 * AND REAL localStorage.setItem    ;)
 */
export const putPlant = (data: IPlant) => {
    /*
    const prom = fetch(`${URL}/plants`, {
       method: "PUT",
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   })
       .then(resp => resp.json());
    */
    // fetch-like part as above
    const prom = new Promise((resolve, reject) => {
        resolve(data);
    }).then(resp => {
        console.log(".json() part", resp);
        return resp;
    });

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
        console.log("updatedPlants ", updatedPlants);
        localStorage.setItem('privPlants', JSON.stringify(updatedPlants))
    });
};