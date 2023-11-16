import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    countriesStore: []
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getCountriesSuccess: (state, action) => {
            state.countriesStore = action.payload;
        },
        clearCountryStore: (state) => {
            state.countriesStore = [];
        },
    },
});

export const homeReducer = homeSlice.reducer;
export const { getCountriesSuccess, clearCountryStore } = homeSlice.actions;