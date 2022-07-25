// Core
import { useDispatch } from '../../../tools/hooks';

// Thunks
import { fetchPosts } from './fetchPosts';

export const usePostsThunk = () => {
    const dispatch = useDispatch();

    return {
        fetchPosts: () => void dispatch(fetchPosts()),
    };
};
