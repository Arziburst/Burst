// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// // Workers
import {
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} from './workers';

function* watchFetchTodos(): SagaIterator {
    yield takeEvery(types.FETCH_TODOS_ASYNC, fetchTodos);
}

function* watchCreateTodo(): SagaIterator {
    yield takeEvery(types.CREATE_TODO_ASYNC, createTodo);
}

function* watchUpdateTodo(): SagaIterator {
    yield takeEvery(types.UPDATE_TODO_ASYNC, updateTodo);
}

function* watchDeleteTodo(): SagaIterator {
    yield takeEvery(types.DELETE_TODO_ASYNC, deleteTodo);
}

export function* watchTodos(): SagaIterator {
    yield all([
        call(watchFetchTodos),
        call(watchCreateTodo),
        call(watchUpdateTodo),
        call(watchDeleteTodo),
    ]);
}
