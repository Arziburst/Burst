// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Tools
// import { API_URL } from '../../../init/constants';

// Types
import { Posts } from '../types';

// Thunk
export const fetchPosts = createAsyncThunk< Posts, undefined, {rejectValue: string}>(
    'FETCH_MESSAGES_ASYNC',
    async (_, { rejectWithValue }) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/psosts');

        if (!response.ok) {
            return rejectWithValue('Something went wrong');
        }

        return response.json();
    },
);
