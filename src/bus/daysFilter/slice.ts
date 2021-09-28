// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { FilterState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: FilterState = {
    isCloudy:   false,
    isSunny:    false,
    minTemp:    0,
    maxTemp:    0,
    isFiltered: false,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers,
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
