// In the slice section i normally follow backend structure.
//  But in this case, we can keep it simple and have one slice for all insurance related data.

import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../lib/axios/axios-base-query';

export const insuranceSlice = createApi({
  reducerPath: 'insuranceSlice',
  baseQuery: axiosBaseQuery({ baseURL: '/api' }),
  tagTypes: ['InsuranceForms', 'InsuranceFormResults'],
  endpoints: builder => ({
    getFormResults: builder.query<Service.results, void>({
      query: () => ({ url: '/insurance/forms/submissions', method: 'GET' }),
      providesTags: ['InsuranceFormResults']
    }),
    getForms: builder.query<Array<Service.forms>, void>({
      query: () => ({ url: '/insurance/forms', method: 'GET' })
    }),
    postFormResult: builder.mutation<any, any>({
      query: body => {
        console.log('before post', body);

        return {
          url: `/insurance/forms/submit`,
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body
        };
      },
      invalidatesTags: ['InsuranceFormResults']
    })
  })
});

export const { useGetFormResultsQuery, usePostFormResultMutation, useGetFormsQuery } =
  insuranceSlice;
