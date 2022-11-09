// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// API
import { API_URL } from '../../../init/constants';

// Tools
import { customFetch } from '../../../tools/utils';

// Types
import * as types from '../types';

// Action
const fetch__entityName__(pascalCase)Action = createAction('__entityName__/FETCH___entityName__(constantCase)_ASYNC');

export const fetch__entityName__(pascalCase) = createAsyncThunk<types.__entityName__(pascalCase), /* payload type => */ undefined>(
    fetch__entityName__(pascalCase)Action.type,
    async (payload) => {
        console.log('fetch__entityName__(pascalCase) payload', payload); /* Demonstration */

        const result = await customFetch<types.__entityName__(pascalCase)>({
            successStatusCode: 200,
            fetch:             () => fetch(`${API_URL}/__entityName__(kebabCase)`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        });

        return result;
    },
);
