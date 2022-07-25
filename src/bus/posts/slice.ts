// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

// ExtraReducers
import { extraReducers } from './thunk/extraReducers';

const initialState = {
    status: 'idle',
    error:  null,
    posts:  [],
};

export const postsSlice = createSlice<types.PostsState, typeof reducers>({
    name: 'posts',
    initialState,
    reducers,
    extraReducers,
});

export const sliceName = postsSlice.name;
export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
