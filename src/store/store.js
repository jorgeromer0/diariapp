import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { diariSlice } from './Diari'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    diari: diariSlice.reducer
    
  },
})