export interface Plant {
    id: number;
    name: string;
    latin: string;
    img?: string;
    description?: string;
    createdAt: string;
}

// const uri = "http://localhost:9090/plants";
// const plants = fetch({uri}).then(plants => plants.json);

const plants: Plant[] = [
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

const number : Plant[] = [
    {
    id: 1,
    name: "number",
    latin: "number",
    description: "number",
    createdAt: Date(),
},
    {
    id: 2,
    name: "number",
    latin: "number",
    description: "number",
    createdAt: Date(),
},
    {
    id: 3,
    name: "number",
    latin: "number",
    description: "number",
    createdAt: Date(),
}] 

export const getPlants = () => plants;
export const getPrivate = () => number;