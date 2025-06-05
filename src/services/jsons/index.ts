import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonSlice = createApi({
  reducerPath: 'jsonSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getTranslate: builder.query<Array<Service.json.bank>, { locale: string }>({
      query: ({ locale }) => ({ url: `locales/${locale}`, method: 'GET' })
    }),
    getLottieJson: builder.query<any, { animation: string }>({
      query: ({ animation }) => ({ url: `lottie/${animation}.json`, method: 'GET' })
    })
  })
});

export const { useGetTranslateQuery, useGetLottieJsonQuery } = jsonSlice;
