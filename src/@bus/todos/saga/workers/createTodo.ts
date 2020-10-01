// Types
import { Todo } from '../../types';

// Sync actions
import { setTodoAction } from '../../actions';

// Api
import * as API from '../api';

// Instruments
import { makeRequest } from '../../../../helpers';
import { CreateTodoActionAsync  } from '../types';

export function* createTodo({ payload }: CreateTodoActionAsync) {
    yield makeRequest<Todo>({
        fetcher:     API.createTodo(payload),
        togglerType: 'isTodosFetching',
        fill:        setTodoAction,
    });
}
