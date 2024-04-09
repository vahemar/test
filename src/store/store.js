import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import productSlice from './slice/productSlice'

import { productApi } from '../services/productApi'
import linkSlice from './slice/linkSlice'
import userSlice from './slice/userSlice'


export const store = configureStore({
  reducer: {
    product:productSlice,
    link:linkSlice,
    user:userSlice,
    [productApi.reducerPath]: productApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)