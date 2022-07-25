// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
// import { usePostsSaga } from './saga';

// Thunk
import { usePostsThunk } from './thunk';

export const usePosts = () => {
    // const { fetchPosts } = usePostsSaga();
    const { fetchPosts } = usePostsThunk();
    const posts = useSelector((state) => state.posts?.posts); // Add posts to ./src/init/redux/index.ts

    useEffect(() => {
        fetchPosts();
    }, []);

    return {
        posts,
    };
};
