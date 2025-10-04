import { createSlice } from "@reduxjs/toolkit";
import { getBanners } from "../APIs/BannerApi";

// Initial state
const initialState = {
  banners: [],
  loading: false,
  error: null,
};

// Slice
const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(getBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;
