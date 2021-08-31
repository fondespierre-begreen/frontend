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
        name: "rose",
        latin: "rosa",
        description: "une jolie fleur",
        createdAt: Date(),
    },
    {
        id: 2,
        name: "bambou",
        latin: "sino bambou",
        description: "yum says the panda !",
        createdAt: Date(),
    },
    {
        id: 3,
        name: "chêne",
        latin: "chenus",
        description: "feuillu",
        createdAt: Date(),
    }]

const pubPlants: Plant[] = [
    {
        id: 1,
        name: "vigne",
        latin: "vinus",
        description: "vinasse",
        createdAt: Date(),
    },
    {
        id: 2,
        name: "sapin",
        latin: "sapinus",
        description: "conifère",
        createdAt: Date(),
    },
    {
        id: 3,
        name: "lotus",
        latin: "lotus",
        description: "elexir de vie",
        createdAt: Date(),
    }]

export const getPlants = () => plants;
export const getPubPlants = () => pubPlants;