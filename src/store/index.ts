import { configureStore } from '@reduxjs/toolkit';
import { jsonSlice } from '../services/jsons';
import { insuranceSlice } from '../services/insurance';
import { userSettingSlice } from './slices/user-setting';
import { serviceSlice } from '../services';

export const store = configureStore({
  reducer: {
    [jsonSlice.reducerPath]: jsonSlice.reducer,
    [insuranceSlice.reducerPath]: insuranceSlice.reducer,
    [userSettingSlice.reducerPath]: userSettingSlice.reducer,
    [serviceSlice.reducerPath]: serviceSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(jsonSlice.middleware)
      .concat(insuranceSlice.middleware)
      .concat(serviceSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
