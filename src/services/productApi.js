import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => `product/${name}`,
    }),
  }),
})

export const { useGetProductByNameQuery } = productApi