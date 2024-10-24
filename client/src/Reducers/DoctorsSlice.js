import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDoctors, fetchDoctorById, fetchRandomDoctors } from '../APIs/DoctorApi';
const initialState = {
    doctors: [],
    loading: false,
    error: null,
};

// Create the doctors slice
const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctors.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.loading = false;
                state.doctors = action.payload;
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchDoctorById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctorById.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.doctors.findIndex((doctor) => doctor._id === action.payload._id);
                if (index !== -1) {
                    state.doctors[index] = action.payload;
                } else {
                    state.doctors.push(action.payload);
                }
            })
            .addCase(fetchDoctorById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }).addCase(fetchRandomDoctors.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(fetchRandomDoctors.fulfilled, (state, action) => {   
                state.loading = false;
                state.doctors = action.payload;
            }).addCase(fetchRandomDoctors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
            
    },
});


export default doctorsSlice.reducer;