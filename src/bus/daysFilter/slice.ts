// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { FilterState } from './types';

// Reducers
import * as reducers from './reducers';

export const initialState: FilterState = {
    isCloudy:   null,
    isSunny:    null,
    minTemp:    null,
    maxTemp:    null,
    currentDay: null,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers,
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
