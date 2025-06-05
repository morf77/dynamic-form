// In the slice section i normally follow backend structure.
//  But in this case, we can keep it simple and have one slice for all insurance related data.

import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../lib/axios/axios-base-query';

export const serviceSlice = createApi({
  reducerPath: 'serviceSlice',
  baseQuery: axiosBaseQuery({ baseURL: '' }),
  endpoints: builder => ({
    getUnknownList: builder.query<
      Array<string>,
      {
        endpoint: string;
      } & any
    >({
      query: ({ endpoint, ...data }) => {
        return { url: endpoint, method: `'GET'`, data };
      }
    })
  })
});

export const { useGetUnknownListQuery } = serviceSlice;
