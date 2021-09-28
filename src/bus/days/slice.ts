// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { DaysState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: DaysState = [];

export const daysSlice = createSlice({
    name: 'days',
    initialState,
    reducers,
});

export const daysActions = daysSlice.actions;
export default daysSlice.reducer;
