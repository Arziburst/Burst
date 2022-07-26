// Types
import * as types from '../types';

// fetchPosts cases
export const PostsPending: types.BaseContact = (state) => {
    state!.status = 'loading';
    state!.error = null;
};

export const PostsFullfiled: types.BaseContact = (state, action) => {
    state!.posts = action.payload;
    state!.status = 'idle';
    state!.error = null;
};

export const PostsRejected: types.BaseContact = (state, action) => {
    state!.status = 'failed';
    state!.posts = [];
    state!.error = action.error;
    console.log(action.error);
};
