import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useGetSongsQuery } from '../redux/services/shazamCore';

// Usage
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCore',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/search/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'a1a7d5e1c9msh2b0a0a0a0a0a0a0a0a0a0a0a0a0');
      return headers;
    },
  
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world',}),
    getArtistDetails: builder.query({query: (artistId) => `/artists/${artistId}`,}),
    getSongDetails: builder.query({query: (songId) => `/tracks/${songId}`,}),
    getSongRelated: builder.query({ query: (songId) => `/tracks/${songId}/related`, }),
    getSongs: builder.query({ query: (query) => `/tracks?q=${encodeURIComponent(query)}`, }),
    getSongsByCountry: builder.query({
      query: (country) => `/tracks?country=${encodeURIComponent(country)}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetArtistDetailsQuery,  useGetSongDetailsQuery,useGetSongsByCountryQuery ,
   useGetSongRelatedQuery , useGetSongsQuery} = shazamCoreApi;