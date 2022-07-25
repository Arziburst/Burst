// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Tools
import { API_URL } from '../../../init/constants';

// Types
import { __entityName__(pascalCase) } from '../types';

// Thunk
export const fetch__entityName__(pascalCase) = createAsyncThunk< __entityName__(pascalCase), undefined, {rejectValue: string}>('FETCH_MESSAGES_ASYNC',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`${API_URL}/__entityName__`);

        if (!response.ok) {
            return rejectWithValue('Something went wrong');
        }

        return response.json();
    });
