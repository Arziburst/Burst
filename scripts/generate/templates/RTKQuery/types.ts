// Redux
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

// Query return type
export type __entityName__(pascalCase) = Array<any>

// EndpointBuilder type
export type EndpointBuilderType = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, '__entityName__', '__entityName__Api'>
