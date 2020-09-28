// Store
import { store } from '../../../@init';

// Actions
import { togglerCreatorAction } from '../../client';
import { setTodosAction } from '../actions';

// Types
import { FetchTodos } from './types';
import { Todos } from '../types';

// Constants
import { API_URL } from '../../../@init/constants';

export const fetchTodos: FetchTodos = async () => {
    store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Todos fetch failed');
        }

        const data: Todos = await response.json();

        store.dispatch(setTodosAction(data));
    } catch (error) {
        console.log(error);
    } finally {
        store.dispatch(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
};
