// Redux
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

// Types
import * as types from './types';

type EndpointBuilderType = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'posts', 'postsApi'>

export const endpoints = (builder: EndpointBuilderType) => ({
    // first argument is return type, second is payload
    fetchPosts: builder.query<types.Post, number>({
        query:        (/* payload */payload) => `posts${/* payload */ ''}?_limit=${payload}`,
        providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'posts', id } as const)),
                { type: 'posts', id: 'POSTS' },
            ]
            : [{ type: 'posts', id: 'POSTS' }],
    }),
    // first argument is return type, second is payload
    addPost: builder.mutation<any, any>({
        query: (payload) => ({
            url:    'posts',
            method: 'POST',
            body:   payload,
        }),
        invalidatesTags: [{ type: 'posts', id: 'LOSTS' }],
    }),
});
