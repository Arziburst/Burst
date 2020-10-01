// Types
import { CreateTodo } from './types';

// Constants
import { API_URL } from '../../../../#init/constants';

export const createTodo: CreateTodo = ({ body }) => async () => {
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

    return response.json();
};
