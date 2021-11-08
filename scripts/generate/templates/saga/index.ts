// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all } from 'redux-saga/effects';

// Types
import * as sagaActions from './sagaActions';

// Workers
import * as workers from './workers';

export function* watch__entityName__(pascalCase)(): SagaIterator {
    yield all([ yield takeEvery(sagaActions.fetch__entityName__(pascalCase)Action.type, workers.fetch__entityName__(pascalCase)) ]);
}
