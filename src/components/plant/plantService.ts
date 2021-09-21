/**
 * ############################################################################
 * Model
 */
export interface IPhoto {
    id?: number | null;
    url?: string;
}

export interface IPlant {
    id?: number;
    name?: string;
    latin?: string;
    photos?: any;
    description?: string;
}

export interface IPlantParams {
    id: string
}

const URL = "http://localhost:9090";
// const URL = "http://192.168.1.46:9090";

export const PERSONNAL = "personnal";


/**
 * ############################################################################
 * fetch
 */

/**
* La liste publique des plantes
* @returns une promise avec la liste des plantes public
*/
export const getPublicPlants = () => {
    return fetch(`${URL}/plants`)
        .then(response => response.json());
};

/**
* La liste privée des plantes de l'apprenant courant
* @param id celui de l'apprenant
* @returns une promise avec la liste privée des plantes d'un apprenant
*/
export const getPrivPlantById = (id: number) => {
    return fetch(`${URL}/learners/${id}/plants`)
        .then(response => response.json());
};

/**
 * Ajoute une plante à la liste publique en DB
 * puis ajoute l'objet retourné au localStorage pubPlants
 * 
 * with learner id
 * @param data 
 */
export const postPlant = (data: any) => {
    return fetch(`${URL}/plants/add/1`, {
        method: "POST",
        headers: {
            'Accept': '*/*',
        },
        body: data
    }).then(resp => resp.json());
}

/**
 * patch d'une plante et mise à jour du localStorage
 * with learner id
 */
export const putPlant = (data: any) => {
    return fetch(`${URL}/plants/edit/1`, {
        method: "PATCH",
        headers: {
            'Accept': '*/*',
        },
        body: data
    }).then(resp => resp.json());
};

/**
 * Getting the last id of plants[]
 */
export const lastId = () => {

    return fetch(`${URL}/lastPlant`, { method: "GET" })
        .then(data => data.json());

}