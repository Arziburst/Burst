// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import * as workers from './workers';

function* watchFetch__entityName__(pascalCase)(): SagaIterator {
    yield takeEvery(types.FETCH___entityName__(constantCase)_ASYNC, workers.fetch__entityName__(pascalCase));
}

export function* watch__entityName__(pascalCase)(): SagaIterator {
    yield all([ call(watchFetch__entityName__(pascalCase)) ]);
}
