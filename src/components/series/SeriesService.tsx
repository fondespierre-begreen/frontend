export interface Serie {
    id: number;
    total: number;
    createdat: string;
}

// const series = fetch(`http://localhost:8888/series`)
//                     .then(res => res.json())

const series: Serie[] = [
    {
        id: 1,
        total: 100,
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