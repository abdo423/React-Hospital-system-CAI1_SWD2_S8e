import { createSlice } from '@reduxjs/toolkit';
import { fetchDepartments, fetchDepartmentById } from '../APIs/DepartmentsApi';

const initialState = {
    departments: [],
    department: null,
    status: 'idle',
    error: null
};

const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDepartments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.departments = action.payload;
            })
            .addCase(fetchDepartments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchDepartmentById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDepartmentById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.department = action.payload;
            })
            .addCase(fetchDepartmentById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default departmentsSlice.reducer;