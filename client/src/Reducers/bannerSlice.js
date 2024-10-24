import { createSlice } from '@reduxjs/toolkit';
import { fetchBanners, fetchBannerById } from "../Apis/bannersApis";

// Fetch courses from the API

const bannerSlice = createSlice({
  name: 'banners',
  initialState: {
    banners: [],
    status: 'idle',
    error: null,
    selectedBanner: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch banner by ID
      .addCase(fetchBannerById.pending, (state) => {
        state.status = 'loading';
        state.selectedBanner = null; // Clear previous banner when loading new one
      })
      .addCase(fetchBannerById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedBanner = action.payload; // Store the fetched banner
      })
      .addCase(fetchBannerById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;

