/**
 * Model
 */
export interface Plant {
    id: number;
    name: string;
    latin: string;
    img?: string;
    description?: string;
    createdAt: string;
}

//informations
const find = window.location.pathname;
export const currentid = parseInt(find.slice(-1));
export const uriList = find.slice(1,find.length-2);


/**
 * Repository
 */
const pubPlants =  fetch('http://localhost:9090/plants')
.then(response => response.json())
.catch(error => console.log(error));

const privPlants: Plant[] = [
    {
    id: 1,
    name: "string",
    latin: "string",
    description: "string",
    createdAt: Date(),
},
    {
    id: 2,
    name: "string",
    latin: "string",
    description: "string",
    createdAt: Date(),
},
    {
    id: 3,
    name: "string",
    latin: "string",
    description: "string",
    createdAt: Date(),
}] 

const pubPlantById = fetch('http://localhost:9090/plants/'+currentid)
.then(response => response.json())
.catch(error => console.log(error));

export const getPrivPlantById = (id: number ) => privPlants.filter((plant)=> plant.id = id)






export const getPubPlants = () => pubPlants;
export const getPrivPlants = () => privPlants;
export const getPubPlantById = () => pubPlantById;
// export const getPrivPlantById = (id: number) => privPlanById;