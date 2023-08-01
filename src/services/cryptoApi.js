import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ad92e42cdcmshec1d43bf66cdd5fp18e4d7jsn6ba16b3adc81',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query: (coinId, timePeriod) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),

    })

});

export const {
    useGetCryptosQuery,
    useGetCryptosDetailsQuery,
    useGetCryptosHistoryQuery,
    useGetExchangesQuery
} = cryptoApi