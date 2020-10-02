// Core
import { put } from 'redux-saga/effects';

// Sync actions
import { deleteTodoAction } from '../../actions';

// Api
import * as API from '../api';

// Instruments
import { makeRequest } from '../../../../helpers';

// Types
import { DeleteTodoActionAsync  } from '../types';

export function* deleteTodo({ payload }: DeleteTodoActionAsync) {
    const isTodoDeleted: Boolean = yield makeRequest<Boolean>({
        fetcher:     API.deleteTodo(payload),
        togglerType: 'isTodosFetching',
    });

    if (isTodoDeleted) {
        yield put(deleteTodoAction(payload.todoId));
    }
}
