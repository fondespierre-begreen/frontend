// const series = fetch(`http://192.168.1.46:9090/series`)
//                     .then(res => res.json())

import { resolve } from "dns";

fetch(`http://localhost:9090/series`)
  .then(res => res.json())
  .then(data => {
    localStorage.getItem('test')
    localStorage.setItem('test', JSON.stringify(data))
  })



export interface ISerie {
  id: number;
  total: number | null;
  createdat: string;
}

const series: ISerie[] = [
  {
    id: 1,
    total: null,
    createdat: "12 janvier 2021"
  },
  {
    id: 2,
    total: 90,
    createdat: "12 janvier 2021"
  },
  {
    id: 3,
    total: 70,
    createdat: "12 janvier 2021"
  },
  {
    id: 4,
    total: 40,
    createdat: "12 janvier 2021"
  }
]

// export interface IQuest {
//     id: number;
//     description: string;
//     plantfield: string;
//     idserie: number;
//     idplant: number;
//     choices: Choices[];
// }

// export interface Choices {
//   id: number;
//   description: string;
//   idquestion: number;
//   idplant: number;
// }



export const getSeries = () => series;

/**
 * 
 * @param tId 
 * @returns tableau d'objets question
 */
export const getquestions = (tId: number) => {

  const serie = JSON.parse(localStorage.getItem('test')!)

  // console.log(serie![tId].questions, "serv");

  const test = serie!.filter((s: any) => s.id == tId)


  // index à 0 serie id est 1
  return test[0].questions

}

export interface ISeriesParams {
  qId: string
}

export const initialCreateTest = {
  total: null,
  questions: []
};

const initialCreateQuestion = {
  description: "",
  plant: {
    name: "",
    latin: "",
    description: "",
    photos: [
      {
        url: ""
      }
    ]
  },
  choices: [
    {
      description: ""
    }
  ]
};

localStorage.setItem('createTest', JSON.stringify(initialCreateTest));

export const getCreateTest = () => JSON.parse(localStorage.getItem('createTest')!);

export const toTheLocalStorage = (test: any): string => {
  localStorage.setItem("createTest", JSON.stringify(test));
  return "done"
};

const URL = "http://localhost:9090";
// const URL = "http://192.168.1.46:9090";

// NEED THE URL
export const postNewTest = () => {
  const data = getCreateTest()

  fetch(`${URL}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(console.log)
};