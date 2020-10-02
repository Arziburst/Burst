// Types
import { Todo } from '../../types';

// Sync actions
import { updateTodoAction } from '../../actions';

// Api
import * as API from '../api';

// Instruments
import { makeRequest } from '../../../../helpers';
import { UpdateTodoActionAsync  } from '../types';

export function* updateTodo({ payload }: UpdateTodoActionAsync) {
    yield makeRequest<Todo>({
        fetcher:     API.updateTodo(payload),
        togglerType: 'isTodosFetching',
        fill:        updateTodoAction,
    });
}
