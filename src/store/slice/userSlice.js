import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: [1, 2, 3, 4, 5, 6],
  reducers: {
    todoAdded(state, action) {
   
    },
   
  },
})

export const { todoAdded } = userSlice.actions
export default userSlice.reducer