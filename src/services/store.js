import { configureStore } from "@reduxjs/toolkit";
import { leagueApi } from "./league";

export const store = configureStore({
    reducer: {
        [leagueApi.reducerPath]: leagueApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(leagueApi.middleware)
})