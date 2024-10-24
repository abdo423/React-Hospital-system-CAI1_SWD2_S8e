import { configureStore } from '@reduxjs/toolkit'
import doctorsSlice from '../Reducers/DoctorsSlice'

export const store = configureStore({
  reducer: {
    doctorsSlice: doctorsSlice,

  },
})


import bannerSlice from "../reducers/bannerSlice";
export default configureStore({
  reducer: {
    banners: bannerSlice,
  },
});
