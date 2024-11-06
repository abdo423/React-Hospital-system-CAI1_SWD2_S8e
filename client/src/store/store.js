import { configureStore } from '@reduxjs/toolkit'
import doctorsSlice from '../Reducers/DoctorsSlice'
import departmentsSlice from '../Reducers/DepartmentsSlice'
import blogsSlice from '../Reducers/BlogPostSlice'
import bannerSlice from '../Reducers/BannerSlice'
export const store = configureStore({
  reducer: {
    doctorsSlice: doctorsSlice,
    departmentsSlice: departmentsSlice,
    blogsSlice: blogsSlice,
  //  bannerSlice: bannerSlice,
  },
})