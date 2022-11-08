// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';
// MarkerGen import extraReducers

const initialState = null;

export const __entityName__Slice = createSlice<types.__entityName__(pascalCase)State, typeof reducers>({
    name: '__entityName__',
    initialState,
    reducers,
    // MarkerGen use extraReducers
});

export const sliceName = __entityName__Slice.name;
export const __entityName__Actions = __entityName__Slice.actions;
export default __entityName__Slice.reducer;
