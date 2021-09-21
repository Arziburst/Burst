// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { CounterState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers,
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
