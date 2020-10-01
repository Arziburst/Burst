// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchTodos } from '../../@bus/todos/saga';

export function* rootSaga() {
    yield all([ watchTodos() ]);
}
