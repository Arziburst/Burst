// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Tools
import { useDispatch } from '../../../tools/hooks';

// Thunk
import { fetch__entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';

// Types
import * as types from '../types';

// Reducers
export const extraReducers = (builder: ActionReducerMapBuilder<types.__entityName__(pascalCase)State>) => {
    builder /* CASES */
        .addCase(fetch__entityName__(pascalCase).fulfilled, (/* state => */__, action) => {
            return action.payload;
        });
};

// Hook
export const use__entityName__(pascalCase)Thunk = () => {
    const dispatch = useDispatch();

    return {
        fetch__entityName__(pascalCase): () => void dispatch(fetch__entityName__(pascalCase)()),
    };
};
