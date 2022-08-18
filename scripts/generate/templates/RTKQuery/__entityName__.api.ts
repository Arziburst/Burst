// Redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API
import { API_URL } from '../../init';

// Endpoints
import { endpoints } from './endpoints';

export const __entityName__Api = createApi({
    reducerPath:       '__entityName__/api',
    tagTypes:          [ '__entityName__' ],
    // Refetching when you change tabs and windows, you can use it in your Query hooks as 2nd argument
    refetchOnFocus:    false,
    // This is how long in seconds RTK Query will keep your data cached
    keepUnusedDataFor: 60,
    baseQuery:         fetchBaseQuery({ baseUrl: `${API_URL}/` }),
    endpoints,
});

export const { useFetch__entityName__(pascalCase)Query, useAdd__entityName__(pascalCase)Mutation } = __entityName__Api;

// Try to use hooks in components Example:

/*
    const { data, error, isLoading } = useFetchPostsQuery();

    addPosts is a function that will call a mutation to add a post to the server
    const [ addPosts, { isLoading: isAdding } ] = useAddPostsMutation();
*/
