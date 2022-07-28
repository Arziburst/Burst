// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// API
import { API_URL } from '../../../init/constants';

// Tools
import { customFetchThunk } from '../../../tools/utils/customFetchThunk';

// Types
import { __entityName__(pascalCase) } from '../types';

// Action
export const fetch__entityName__(pascalCase)Action = createAction('__entityName__(pascalCase)/FETCH_SOMETHING_ASYNC');

export const fetch__entityName__(pascalCase) = createAsyncThunk<__entityName__(pascalCase), undefined>(
    fetch__entityName__(pascalCase)Action.type,
    async (_) => {
        const result = await customFetchThunk<any>({
            successStatusCode: 200,
            fetch:             () => fetch(`${API_URL}`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        });

        return result;
    },
);
