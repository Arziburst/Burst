// Types
import * as types from './types';

export const setPosts: types.BaseContact<types.Posts> = (state, action) => {
    state!.posts = action.payload;
};
