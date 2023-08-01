import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ad92e42cdcmshec1d43bf66cdd5fp18e4d7jsn6ba16b3adc81',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`)
        })
    })

});

export const { useGetCryptosNewsQuery } = cryptoNewsApi