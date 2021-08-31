export interface Plant {
    id: number;
    name: string;
    latin: string;
    img?: string;
    description?: string;
    createdAt: string;
}

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

// const pubPlants: Plant[] = [
//     {
//     id: 1,
//     name: "number",
//     latin: "number",
//     description: "number",
//     createdAt: Date(),
// },
//     {
//     id: 2,
//     name: "number",
//     latin: "number",
//     description: "number",
//     createdAt: Date(),
// },
//     {
//     id: 3,
//     name: "number",
//     latin: "number",
//     description: "number",
//     createdAt: Date(),
// }] 


export const getPrivPlants = () => privPlants;
export const getPubPlants = () => pubPlants;