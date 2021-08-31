export interface Serie {
    id: number;
    total: number | null;
    createdat: string;
}

const series = fetch(`http://localhost:9090/series`)
                    .then(res => res.json())


export const getSeries = () => series;