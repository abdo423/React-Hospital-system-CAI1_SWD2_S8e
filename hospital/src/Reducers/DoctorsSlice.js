import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    doctors: [],
    loading: false,
    error: null,
};

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        fetchDoctorsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchDoctorsSuccess(state, action) {
            state.loading = false;
            state.doctors = action.payload;
        },
        fetchDoctorsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        addDoctor(state, action) {
            state.doctors.push(action.payload);
        },
        removeDoctor(state, action) {
            state.doctors = state.doctors.filter(doctor => doctor.id !== action.payload);
        },
        updateDoctor(state, action) {
            const index = state.doctors.findIndex(doctor => doctor.id === action.payload.id);
            if (index !== -1) {
                state.doctors[index] = action.payload;
            }
        },
    },
});

export const {
    fetchDoctorsStart,
    fetchDoctorsSuccess,
    fetchDoctorsFailure,
    addDoctor,
    removeDoctor,
    updateDoctor,
} = doctorsSlice.actions;

export default doctorsSlice.reducer;