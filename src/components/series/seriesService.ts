// const series = fetch(`http://192.168.1.46:9090/series`)
//                     .then(res => res.json())


localStorage.setItem('checkedChoices', JSON.stringify([]))

export const getCheckedChoices = () => {
  const lSCCs = localStorage.getItem('checkedChoices');
  const parsedLSCCs = JSON.parse(lSCCs!)
  return parsedLSCCs;
}

fetch(`http://localhost:9090/series`)
  .then(res => res.json())
  .then(data => {
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

export const getTest = (tId: number) => {

  const serie = JSON.parse(localStorage.getItem('test')!)

  // console.log(serie![tId].questions, "serv");

  const test = serie!.filter((s: any) => s.id == tId)


  // index à 0 serie id est 1
  return test[0]

}




export const postSerie = (serie: any) => {
  return fetch(`http://localhost:9090/series`, {
    method: "POST",
    headers: {
      'Accept': '*/*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(serie),
  }).then(resp => resp.json())
}