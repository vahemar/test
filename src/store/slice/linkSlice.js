import { createSlice } from '@reduxjs/toolkit'

const linkSlice = createSlice({
  name: 'link',
  initialState: [
    {id:1, title:'L O G O', path:'/'},
    {id:2, title:'Log in', path:'/login'},
    {id:3, title:'Contact', path:'/contact'},
    {id:4, title:'About', path:'/about'},
  ],
  
})

export default linkSlice.reducer