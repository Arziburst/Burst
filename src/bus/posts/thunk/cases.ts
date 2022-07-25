// Types
import * as types from '../types';

// fetchPosts cases
export const PostsPending = (state: types.PostsState) => {
    state!.status = 'loading';
    state!.error = null;
};

export const PostsFullfiled = (state: types.PostsState, action: types.ActionType) => {
    state!.posts = action.payload;
    state!.status = 'idle';
    state!.error = null;
};

export const PostsRejected = (state: types.PostsState, action: types.ActionType) => {
    state!.status = 'failed';
    state!.posts = [];
    state!.error = action.error;
};
