import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlant, IPhoto } from "../components/plant/plantService";

interface IsendingTest {
    id: number;
    description: string;
    choices: IChoices[];
    photo?: IPhoto;
}

interface ITakingTestChoices {
    description: string;
    plant: IPlant | null;
}

interface ITakingTestQuestion {
    description: string;
    plant: IPlant;
    choices: ITakingTestChoices[];
    answers: Ianswer[];
}

export interface IQuiz {
    id: number | null;
    questions: ITakingTestQuestion[];
    total: number | null;
}

interface IChoices {
    description: string;
}

interface IQuestion {
    description: string;
    plant: IPlant;
    choices: IChoices[];
    answers: Ianswer[];
}

interface ITest {
    questions: IQuestion[];
}

interface Ianswer {
    description: string;
}

interface IPlantId {
    plant: IPlant;
    id: number;
}

interface IInitState {
    test: ITest;
    id: number;
    series: IQuiz[];
    serieId: number;
}

const initialState: IInitState = {
    test: {
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
            ],
            answers: [{
                description: "",
            }]
        }],
    },
    id: -1,
    series: [
        {
            id: null,
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
                        description: "",
                        plant: null
                    }
                ],
                answers: [{
                    description: "",
                }]
            }],
        }
    ],
    serieId: 0
};

const slice = createSlice({
    name: "theSeriesReducer",
    initialState,
    reducers: {
        initTest: (state) => {
            state.test.questions = [];
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
        },
        initSeries: (state, action) => {
            state.series = action.payload;
        },
        getTotal: (state) => {
        },
        getSeriesIdForReview: (state, action) => {
            state.serieId = action.payload.serieId;
        }
    }
});

export const {
    initTest,
    addPlantToQuestion,
    addQuestion,
    initSeries,
    getSeriesIdForReview,
    getTotal
} = slice.actions;

export default slice.reducer;