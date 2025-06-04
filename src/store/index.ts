import { configureStore } from '@reduxjs/toolkit';
import { jsonSlice } from '../services/jsons';
import { insuranceSlice } from '../services/insurance';
import { userSettingSlice } from './slices/user-setting';

export const store = configureStore({
  reducer: {
    [jsonSlice.reducerPath]: jsonSlice.reducer,
    [insuranceSlice.reducerPath]: insuranceSlice.reducer,
    [userSettingSlice.reducerPath]: userSettingSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jsonSlice.middleware).concat(insuranceSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
