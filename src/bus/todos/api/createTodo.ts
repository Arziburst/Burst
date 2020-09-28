// Store
import { store } from '../../../@init';

// Actions
import { togglerCreatorAction } from '../../client';
import { setTodoAction } from '../actions';

// Types
import { CreateTodoType } from './types';
import { Todo } from '../types';

// Constants
import { API_URL } from '../../../@init/constants';

export const createTodo: CreateTodoType = async ({ body }) => {
    store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:        JSON.stringify(body),
        });

        if (response.status !== 201) {
            throw new Error('Todo create failed');
        }

        const data: Todo = await response.json();

        store.dispatch(setTodoAction(data));
    } catch (error) {
        console.log(error);
    } finally {
        store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
};
