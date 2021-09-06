export interface ISerie {
    id: number;
    total: number | null;
    createdat: string;
}

// const series = fetch(`http://localhost:8888/series`)
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

export const getSeries = () => series;