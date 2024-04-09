import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../constants/constant'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: (name) => '/user',
    }),
    createUserByName: builder.mutation({
        query: (body) => ({
            url: "/user",
            method: "POST",
            body: body
        })
    })
  }),
})

export const { useGetUserByNameQuery, useCreateUserByNameMutation } = userApi