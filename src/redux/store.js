import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { shazamCoreApi, useGetTopChartsQuery } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(shazamCoreApi.middleware),
});

export { useGetTopChartsQuery };