export interface ISerie {
    id: number;
    total: number | null;
    createdat: string;
}

// const series = fetch(`http://192.168.1.46:9090/series`)
//                     .then(res => res.json())

export const getSerieById = (id: number) => {
  fetch(`http://192.168.1.46:9090/series/${id}`)
  .then(res => res.json())
  .then(data => {
    let test = localStorage.getItem('test')
    test = data
    localStorage.setItem('test', JSON.stringify(test))

  })
  const lc = localStorage.getItem('test')
  const currentTest = JSON.parse(lc!)
  return currentTest
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

export interface IQuest {
    id: number;
    description: string;
    plantfield: string;
    idserie: number;
    idplant: number;
    choices: Choices[];
}

export interface Choices {
  id: number;
  description: string;
  idquestion: number;
  idplant: number;
}



export const getSeries = () => series;

export const getquestions = (id: number) => {

  const lc = localStorage.getItem('test')

  const serie = JSON.parse(lc!)
  return serie.questions

} 