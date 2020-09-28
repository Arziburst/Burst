// Store
import { store } from '../../../@init';

// Actions
import { togglerCreatorAction } from '../../client';
import { updateTodoAction } from '../actions';

// Types
import { UpdateTodo } from './types';
import { Todo } from '../types';

// Constants
import { API_URL } from '../../../@init/constants';

export const updateTodo: UpdateTodo = async ({ todoId, body }) => {
    store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:        JSON.stringify(body),
        });

        if (response.status !== 200) {
            throw new Error('Todo update failed');
        }

        const data: Todo = await response.json();

        store.dispatch(updateTodoAction(data));
    } catch (error) {
        console.log(error);
    } finally {
        store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
};
