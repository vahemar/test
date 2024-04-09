import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: [1, 2, 3, 4, 5, 6],
  reducers: {
    todoAdded(state, action) {
   
    },
   
  },
})

export const { todoAdded } = productSlice.actions
export default productSlice.reducer