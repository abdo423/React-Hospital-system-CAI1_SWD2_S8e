import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Async thunk to fetch all doctors
// Use the API_BASE_URL from the environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log(API_BASE_URL);
export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/doctors`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch a doctor by ID
export const fetchDoctorById = createAsyncThunk(
  "doctors/fetchDoctorById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/doctors/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to get 4 random a doctor
export const fetchRandomDoctors = createAsyncThunk(
  "doctors/fetchRandomDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/doctors/random`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
