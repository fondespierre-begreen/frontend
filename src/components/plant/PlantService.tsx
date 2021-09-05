/**
 * Model
 */
export interface Plant {
    id?: number;
    name: string;
    latin: string;
    img?: string;
    description?: string;
    // createdAt?: string;
}

export interface IPlantParams {
    id: string
}

//informations
// const find = window.location.pathname;
// export const currentid = parseInt(find.slice(-1));
// export const uriList = find.slice(8, find.length - 2);

const URL = "http://localhost:9090";


/**
 * Repository
 */
const pubPlants = fetch(`${URL}/plants`)
    .then(response => response.json())
    .then(response => localStorage.setItem('pubPlants', JSON.stringify(response)))
    .catch(error => console.log(error));

const privPlants: Plant[] = [
    {
        id: 1,
        name: "My own Rose",
        latin: "Flos mea",
        description: "string"
    },
    {
        id: 2,
        name: "My own tree",
        latin: "Mea arbor",
        description: "string"
    },
    {
        id: 3,
        name: "My own mushroom",
        latin: "Fungus mea",
        description: "string"
    }]

// const pubPlantById = fetch(`${URL}/plants/${currentid}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));

export const getPrivPlantById = (id: number) => privPlants.find(plant => plant.id === id)







export const getPubPlants = () => pubPlants;
export const getPrivPlants = () => privPlants;
export const getPubPlantById = (plantId: number) => {
    return fetch(`${URL}/plants/${plantId}`)
        .then(response => response.json())
        .catch(error => console.log(error));
};
// export const getPrivPlantById = (id: number) => privPlanById;


export const postPlant = (data: Plant) => {
    const prom = fetch(`${URL}/plants`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json());

    prom.then(plantResp => {
        const prevPlants = localStorage.getItem('pubPlants');
        let oldPlants: Plant[] = [];
        if (prevPlants !== null) {
            oldPlants = JSON.parse(prevPlants);
            oldPlants.push(plantResp)
        }
        localStorage.setItem('pubPlants', JSON.stringify(oldPlants))
    });

    return prom;
}