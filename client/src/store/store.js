import { configureStore } from '@reduxjs/toolkit'
import doctorsSlice from '../Reducers/DoctorsSlice'

export const store = configureStore({
  reducer: {
    doctorsSlice: doctorsSlice,

  },
})