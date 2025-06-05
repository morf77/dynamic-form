// In the slice section i normally follow backend structure.
//  But in this case, we can keep it simple and have one slice for all insurance related data.

import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../lib/axios/axios-base-query';

export const insuranceSlice = createApi({
  reducerPath: 'insuranceSlice',
  baseQuery: axiosBaseQuery({ baseURL: '/api' }),
  endpoints: builder => ({
    getFormResults: builder.query<Service.results, void>({
      query: () => ({ url: '/insurance/forms/submissions', method: 'GET' })
    }),
    getForms: builder.query<Array<Service.forms>, void>({
      query: () => ({ url: '/insurance/forms', method: 'GET' })
    }),
    postFormResult: builder.mutation<any, any>({
      query: body => ({
        url: `/insurance/forms/submit`,
        method: 'POST',
        body
      })
    })
  })
});

export const { useGetFormResultsQuery, usePostFormResultMutation, useGetFormsQuery } =
  insuranceSlice;
