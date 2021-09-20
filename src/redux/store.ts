import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./plantSlice";
import seriesReducer from "./seriesSlice";

export const store = configureStore({
    reducer: {
        plant: plantReducer,
        series: seriesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch