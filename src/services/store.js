import { configureStore } from "@reduxjs/toolkit";
import { scoresApi } from "./scores";

export const store = configureStore({
    reducer: {
        [scoresApi.reducerPath]: scoresApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})