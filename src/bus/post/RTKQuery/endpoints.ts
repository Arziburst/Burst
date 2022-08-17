// Redux
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

// Types
import * as types from './types';

export const endpoints = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'posts', 'postsApi'>) => ({
    // first argument is return type, second is payload
    fetchPosts: builder.query<types.Post, void>({
        query:        (/* payload */) => `messages${/* payload */ ''}`,
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
            url:    'messages',
            method: 'POST',
            body:   payload,
        }),
        invalidatesTags: [{ type: 'posts', id: 'POSTS' }],
    }),
});
