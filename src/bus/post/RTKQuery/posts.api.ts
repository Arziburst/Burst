// Redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Endpoints
import { endpoints } from './endpoints';
export const postsApi = createApi({
    reducerPath:       'postsApi',
    tagTypes:          [ 'posts' ],
    // This is how long in seconds RTK Query will keep your data cached
    keepUnusedDataFor: 60,
    baseQuery:         fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints,
});

export const { useFetchPostsQuery, useAddPostMutation } = postsApi;
