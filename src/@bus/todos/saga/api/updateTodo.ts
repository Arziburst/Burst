// Types
import { UpdateTodo } from './types';

// Constants
import { API_URL } from '../../../../#init/constants';

export const updateTodo: UpdateTodo = ({ todoId, body }) => async () => {
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

    return response.json();
};
