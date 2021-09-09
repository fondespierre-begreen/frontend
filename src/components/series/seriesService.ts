export interface ISerie {
  id: number;
  total: number | null;
  createdat: string;
}

// const series = fetch(`http://192.168.1.46:9090/series`)
//                     .then(res => res.json())

fetch(`http://192.168.1.46:9090/series`)
  .then(res => res.json())
  .then(data => {
    localStorage.getItem('test')
    console.log(data);
    localStorage.setItem('test', JSON.stringify(data))
  })


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

  const ls = localStorage.getItem('test')
  console.log(ls + "service");

  const serie = JSON.parse(ls!)
  console.log(serie![tId - 1].questions, "service");

  // index à 0 serie id est 1
  return serie[tId - 1].questions

}