import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlant, IPhoto } from "../components/plant/plantService";

interface IsendingTest {
    id: number;
    description: string;
    choices: IChoices[];
    photo?: IPhoto;
}

interface IChoices {
    description: string;
}

interface IQuestion {
    description: string;
    plant: IPlant;
    choices: IChoices[];
}

interface ITest {
    total: number | null;
    questions: IQuestion[];
}

interface IPlantId {
    plant: IPlant;
    id: number;
}

interface IInitState {
    test: ITest;
    id: number;
}

const initialState: IInitState = {
    test: {
        total: null,
        questions: [{
            description: "",
            plant: {
                id: 0,
                name: "",
                latin: "",
                description: "",
                photos: [
                    {
                        id: null,
                        url: ""
                    }
                ]
            },
            choices: [
                {
                    description: ""
                }
            ]
        }],
    },
    id: -1,
};

const slice = createSlice({
    name: "theSeriesReducer",
    initialState,
    reducers: {
        initTest: (state) => {
            state.test.questions = [];
            state.test.total = null;
            state.id = -1;
        },
        addPlantToQuestion: (state, action: PayloadAction<IPlantId>) => {
            state.test.questions[action.payload.id].plant = action.payload.plant;
        },
        addQuestion: (state, action: PayloadAction<IsendingTest>) => {
            state.test.questions[action.payload.id].description = action.payload.description;
            state.test.questions[action.payload.id].choices = action.payload.choices;
            if (action.payload.photo) {
                state.test.questions[action.payload.id].plant.photos = action.payload.photo;
            } else {
                delete state.test.questions[action.payload.id].plant.photos
            }
        }
    }
});

export const {
    initTest,
    addPlantToQuestion,
    addQuestion
} = slice.actions;

export default slice.reducer;