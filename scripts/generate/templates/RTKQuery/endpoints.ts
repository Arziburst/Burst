// Types
import * as types from './types';

export const endpoints = (builder: types.EndpointBuilderType) => ({
    // first argument is return type, second is payload
    fetch__entityName__(pascalCase): builder.query<types.__entityName__(pascalCase), void>({
        query:        (/* payload */) => `__entityName__${/* payload */ ''}`,
        providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: '__entityName__', id } as const)),
                { type: '__entityName__', id: '__entityName__(pascalCase)' },
            ]
            : [{ type: '__entityName__', id: '__entityName__(pascalCase)' }],
    }),
    // first argument is return type, second is payload
    add__entityName__(pascalCase): builder.mutation<any, any>({
        query: (payload) => ({
            url:    '__entityName__',
            method: 'POST',
            body:   payload,
        }),
        invalidatesTags: [{ type: '__entityName__', id: '__entityName__(pascalCase)' }],
    }),
});
