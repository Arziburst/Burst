// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { FiltersState } from './types';

// Reducers
import * as reducers from './reducers';

export const initialState: FiltersState = {
    filtersParams: {
        isCloudy: null,
        isSunny:  null,
        minTemp:  null,
        maxTemp:  null,
    },
    currentDay: null,
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers,
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
