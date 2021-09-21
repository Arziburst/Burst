// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchTodos } from '../../bus/todos/saga';
import { watchMessages } from '../../bus/messages/saga';

export function* rootSaga() {
    yield all([
        watchTodos(),
        watchMessages(),
    ]);
}
