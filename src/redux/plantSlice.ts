import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPlant, PERSONNAL } from "../components/plant/plantService";

interface IPlantId {
    value: string;
    id: number;
}

interface IQuery {
    value: string;
    query: string;
}

interface IInitState {
    publicPlant: IPlant[];
    privatePlant: IPlant[];
    tempPub: IPlant[];
    tempPriv: IPlant[];
    detailPlant: IPlant;
    query: string;
    value: string;
}

const initialState: IInitState = {
    publicPlant: [],
    privatePlant: [],
    tempPub: [],
    tempPriv: [],
    detailPlant: {},
    query: "",
    value: PERSONNAL
}

const slice = createSlice({
    name: "thePlantReducer",
    initialState,
    reducers: {
        initPublicPlant: (state, action: PayloadAction<[]>) => {
            state.publicPlant = action.payload;
            state.tempPub = action.payload;
        },
        initPrivatePlant: (state, action: PayloadAction<[]>) => {
            state.privatePlant = action.payload;
            state.tempPriv = action.payload;
        },
        updatePrivatePlant: (state, action: PayloadAction<IPlant>) => {
            state.privatePlant.push(action.payload);
            state.tempPriv.push(action.payload);
        },
        updateQuery: (state, action: PayloadAction<IQuery>) => {
            state.value = action.payload.value;

            // ?!?!? LÀ AUSSI C'EST INVERSÉ ?!?!?
            if (action.payload.value === PERSONNAL) {
                state.tempPriv = state.privatePlant.filter(pp => {
                    return pp.name?.toLocaleLowerCase().includes(state.query.toLocaleLowerCase())
                });
            } else {
                state.tempPub = state.publicPlant.filter(pp => {
                    return pp.name?.toLocaleLowerCase().includes(state.query.toLocaleLowerCase())
                });
            }

            state.query = action.payload.query;
        },
        getplantById: (state, action: PayloadAction<IPlantId>) => {
            if (action.payload.value === PERSONNAL) {
                state.detailPlant = state.tempPriv.filter(plt => { return plt.id === action.payload.id })[0];
            } else {
                state.detailPlant = state.tempPub.filter(plt => { return plt.id === action.payload.id })[0];
            }
        },
        putPrivatePlants: (state, action) => {
            let temp = state.tempPriv.map(p => {
                if (action.payload.id === p.id) return action.payload;
                return p;
            })
            state.tempPriv = temp;
            state.privatePlant = temp;
        }
    }
})

export const {
    initPublicPlant,
    initPrivatePlant,
    updatePrivatePlant,
    updateQuery,
    getplantById,
    putPrivatePlants
} = slice.actions;

export default slice.reducer;