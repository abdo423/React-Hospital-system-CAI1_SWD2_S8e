import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBanners = createAsyncThunk('banners/fetchBanners', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/banners`);
  return response.data;
});

export const fetchBannerById = createAsyncThunk('banners/fetchBannerById', async (bannerId) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/banners/${bannerId}`);
  return response.data;
});
