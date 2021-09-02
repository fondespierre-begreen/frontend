export interface Question {
    id: number,
    description: string,
    plantfield: string,
    idserie: number,
    idplant: number
}

const questions: Question[] = [
    {
        id: 1,
        description: "Question 1 ?",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    },
    {
        id: 2,
        description: "Question 2 ?",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    },
    {
        id: 3,
        description: "Question 3 ?",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    },
    {
        id: 4,
        description: "Question 4 ?",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    },
    {
        id: 5,
        description: "Question 5",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    },
    {
        id: 6,
        description: "Question 6 ?",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    },
    {
        id: 7,
        description: "Question 7 ?",
        plantfield: "nom",
        idserie: 1,
        idplant: 5
    }
]


export const getQuestion = () => questions;