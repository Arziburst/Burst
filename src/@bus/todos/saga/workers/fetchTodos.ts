// Types
import { Todos } from '../../types';

// Sync actions
import { setTodosAction } from '../../actions';

// Api
import * as API from '../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* fetchTodos() {
    yield makeRequest<Todos>({
        fetcher:     API.fetchTodos,
        togglerType: 'isTodosFetching',
        fill:        setTodosAction,
    });
}
