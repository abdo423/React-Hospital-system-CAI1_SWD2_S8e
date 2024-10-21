import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL + '/departments';

// GET all departments
export const fetchDepartments = createAsyncThunk('departments/fetchAll', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

// GET department by ID
export const fetchDepartmentById = createAsyncThunk('departments/fetchById', async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
});

