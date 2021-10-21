// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { __entityName__(pascalCase)State } from './types';

// Cases
import * as cases from './cases';

const initialState: __entityName__(pascalCase)State = [];

export const __entityName__Slice = createSlice({
    name:     '__entityName__',
    initialState,
    reducers: {
        ...cases,
    },
});

export const __entityName__Actions = __entityName__Slice.actions;
export default __entityName__Slice.reducer;
