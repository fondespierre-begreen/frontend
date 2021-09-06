import { IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { IPlant } from "./plantService";


const SearchBar: React.FC<{ plants: IPlant[] }> = ({ plants }) => {

    const [lists, setLists] = useState<IPlant[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLists(plants); //init private list
        let tempSearchResult = lists.filter(ele => {
            return ele.name.toLowerCase().indexOf(searchQuery) > -1;
        })
        // if (tempSearchResult === []) setLists(privPlants);
        // else setLists([...tempSearchResult]);
        setLists([...tempSearchResult]);
    }, [setLists, searchQuery])

    return (
        <IonToolbar>
            {/* https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator */}
            <IonSearchbar value={searchQuery} onIonChange={e => setSearchQuery(e.detail.value!)} />
        </IonToolbar>
    );
};

export default SearchBar;