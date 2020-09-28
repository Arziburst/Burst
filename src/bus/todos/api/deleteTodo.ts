// Store
import { store } from '../../../@init';

// Actions
import { togglerCreatorAction } from '../../client';
import { deleteTodoAction } from '../actions';

// Types
import { DeleteTodo } from './types';

// Constants
import { API_URL } from '../../../@init/constants';

export const deleteTodo: DeleteTodo = async ({ todoId }) => {
    store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.status !== 200) {
            throw new Error('Todo delete failed');
        }

        const data: Boolean = await response.json();

        if (data) {
            store.dispatch(deleteTodoAction(todoId));
        }
    } catch (error) {
        console.log(error);
    } finally {
        store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
};
