// Types
import { DeleteTodo } from './types';

// Constants
import { API_URL } from '../../../../#init/constants';

export const deleteTodo: DeleteTodo = ({ todoId }) => async () => {
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

    return response.json();
};
