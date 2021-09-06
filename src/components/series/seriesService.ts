export interface ISerie {
    id: number;
    total: number | null;
    createdat: string;
}

// const series = fetch(`http://192.168.1.46:9090/series`)
//                     .then(res => res.json())

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
  }
  
  const questions: IQuest[] = [
    {
      id: 1,
      description: 'Question 1 ?',
      plantfield: 'nom',
      idserie: 1,
      idplant: 5
    },
    {
      id: 2,
      description: 'Question 2 ?',
      plantfield: 'nom',
      idserie: 1,
      idplant: 5
    },
    {
      id: 3,
      description: 'Question 3 ?',
      plantfield: 'nom',
      idserie: 3,
      idplant: 5
    },
    {
      id: 4,
      description: 'Question 4 ?',
      plantfield: 'nom',
      idserie: 1,
      idplant: 5
    },
    {
      id: 5,
      description: 'Question 5',
      plantfield: 'nom',
      idserie: 2,
      idplant: 5
    },
    {
      id: 6,
      description: 'Question 6 ?',
      plantfield: 'nom',
      idserie: 1,
      idplant: 5
    },
    {
      id: 7,
      description: 'Question 7 ?',
      plantfield: 'nom',
      idserie: 2,
      idplant: 5
    }
  ];

  export const getSeries = () => series;
  
  export const getquestions = (id: number) =>
    questions.filter(q => q.idserie === id);