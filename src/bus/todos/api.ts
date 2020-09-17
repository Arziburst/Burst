// Types
import { FetchTodos, CreateTodoType, UpdateTodo, DeleteTodo } from './types';

// Constants
import { API_URL } from '../../@init/constants';

// Instruments
const todosUrl = `${API_URL}/todos`;

export const fetchTodos: FetchTodos = async () => {
    const response = await fetch(todosUrl, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Todos fetch failed');
    }

    return response.json();
};

export const createTodo: CreateTodoType = async ({ body }) => {
    const response = await fetch(todosUrl, {
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

export const updateTodo: UpdateTodo = async ({ todoId, body }) => {
    const response = await fetch(`${todosUrl}/${todoId}`, {
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

export const deleteTodo: DeleteTodo = async ({ todoId }) => {
    const response = await fetch(`${todosUrl}/${todoId}`, {
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
