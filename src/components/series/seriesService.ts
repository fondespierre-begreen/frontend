// const URL = "http://localhost:9090";
const URL = "http://192.168.1.46:9090";

/**
 * #############################################################################
 * interface
 */
export interface ISerie {
  id: number;
  total: number | null;
  createdat: string;
}

export interface IQuizParams {
  qId: string;
  tId: string;
}

export interface ISeriesParams {
  qId: string
}

/**
 * #############################################################################
 * model
 */
export const initialCreateTest = {
  total: null,
  questions: []
};

/**
 * #############################################################################
 * localStorage
 */
localStorage.setItem('checkedChoices', JSON.stringify([]));

export const getCheckedChoices = () => {
  const lSCCs = localStorage.getItem('checkedChoices');
  const parsedLSCCs = JSON.parse(lSCCs!);
  return parsedLSCCs;
}

/**
 * @param tId 
 * @returns tableau d'objets question
 */
export const getquestions = (tId: number) => {
  const serie = JSON.parse(localStorage.getItem('test')!);
  const test = serie!.filter((s: any) => s.id == tId);

  // index à 0 serie id est 1
  return test[0].questions;
}

export const getTest = (tId: number) => {
  const serie = JSON.parse(localStorage.getItem('test')!);
  const test = serie!.filter((s: any) => s.id == tId);

  // index à 0 serie id est 1
  return test[0];
}

localStorage.setItem('createTest', JSON.stringify(initialCreateTest));

export const getCreateTest = () => JSON.parse(localStorage.getItem('createTest')!);

export const toTheLocalStorage = (test: any): string => {
  localStorage.setItem("createTest", JSON.stringify(test));
  return "done"
};

/**
 * #############################################################################
 * fetch
 */

fetch(`${URL}/series`)
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('test', JSON.stringify(data))
  });

export const postSerie = (serie: any) => {
  return fetch(`${URL}/series`, {
    method: "POST",
    headers: {
      'Accept': '*/*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(serie),
  }).then(resp => resp.json());
}

export const postNewTest = (test: any) => {
  const strTest = JSON.stringify(test);
  return fetch(`${URL}/createSerie`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: strTest
  })
    .then(resp => resp.json());
};

export const getSeries = () => {
  return fetch(`${URL}`)
    .then(resp => resp.json());
};

/**
 * #############################################################################
 * mock data
 */
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
];

// export const getSeries = () => series;
