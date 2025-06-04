import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonSlice = createApi({
  reducerPath: 'jsonSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getBanksJson: builder.query<Array<Service.json.bank>, void>({
      query: () => ({ url: 'jsons/bank.json', method: 'GET' })
    }),
    getLottieJson: builder.query<any, { animation: string }>({
      query: ({ animation }) => ({ url: `lottie/${animation}.json`, method: 'GET' })
    })
  })
});

export const { useGetBanksJsonQuery, useGetLottieJsonQuery } = jsonSlice;
