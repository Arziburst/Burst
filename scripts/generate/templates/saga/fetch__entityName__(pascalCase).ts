// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { __entityName__Actions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const fetch__entityName__(pascalCase)Action = createAction<number>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { __entityName__(pascalCase) } from '../types';

// Saga
const fetch__entityName__(pascalCase) = (callAction: ReturnType<typeof fetch__entityName__(pascalCase)Action>) => makeRequest<__entityName__(pascalCase)>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/__entityName__`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(__entityName__Actions.set__entityName__(pascalCase)(result));
    },
});

// Watcher
export function* watchFetch__entityName__(pascalCase)(): SagaIterator {
    yield takeLatest(fetch__entityName__(pascalCase)Action.type, fetch__entityName__(pascalCase));
}
