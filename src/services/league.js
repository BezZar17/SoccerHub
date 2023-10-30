import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_SCORES_KEY;
export const leagueApi = createApi({
    reducerPath: 'leagueApi',
    BaseQuery: fetchBaseQuery({
        baseUrl: 'https://api-football-v1.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'api-football-v1.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) =>({
        getScores: builder.query({
            query: (params) => `fixtures?url=${(params.leagueUrl)}`
        })
    })

})

export const { useLazyGetScoresQuery } = leagueApi