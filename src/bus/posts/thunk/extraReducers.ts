// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Thunk requests
import {  fetchPosts } from './fetchPosts';

// Thunk Cases
import * as Cases from './cases';

// Types
import { PostsState } from '../types';

// Extra reducers
export const extraReducers = (builder: ActionReducerMapBuilder<PostsState>) => {
    builder
        // fetchPosts Cases
        .addCase(fetchPosts.pending, Cases.PostsPending)
        .addCase(fetchPosts.fulfilled, Cases.PostsFullfiled)
        .addCase(fetchPosts.rejected, Cases.PostsRejected);
};
