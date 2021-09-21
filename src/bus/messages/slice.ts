// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { MessagesState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: MessagesState = [];

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers,
});

export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
