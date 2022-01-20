// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchMessages } from '../../bus/messages/saga';

export function* rootSaga() {
    yield all([ watchMessages() ]);
}
