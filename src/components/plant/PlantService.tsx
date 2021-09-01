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
export const uriList = find.slice(8,find.length-2);


/**
 * Repository
 */
const pubPlants =  fetch('http://localhost:9090/plants')
.then(response => response.json())
.catch(error => console.log(error));

const privPlants: Plant[] = [
    {
    id: 1,
    name: "string1",
    latin: "string1",
    description: "string",
    createdAt: Date(),
},
    {
    id: 2,
    name: "string2",
    latin: "string2",
    description: "string",
    createdAt: Date(),
},
    {
    id: 3,
    name: "string3",
    latin: "string3",
    description: "string",
    createdAt: Date(),
}] 

const pubPlantById = fetch('http://localhost:9090/plants/'+currentid)
.then(response => response.json())
.catch(error => console.log(error));

export const getPrivPlantById = (id: number ) => privPlants.find(plant=> plant.id = id)

console.log(uriList)






export const getPubPlants = () => pubPlants;
export const getPrivPlants = () => privPlants;
export const getPubPlantById = () => pubPlantById;
// export const getPrivPlantById = (id: number) => privPlanById;