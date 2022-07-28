import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { __entityName__(pascalCase)State } from '../types';
import { fetch__entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';

export const extraReducers = (builder: ActionReducerMapBuilder<__entityName__(pascalCase)State>) => {
    builder
        // fetchMessages Cases
        .addCase(fetch__entityName__(pascalCase).fulfilled, (state, action) => action.payload);
};
