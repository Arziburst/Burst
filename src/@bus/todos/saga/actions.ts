// Instruments
import * as types from './types';

export const fetchTodosActionAsync: types.FetchTodosContract = () => ({
    type: types.FETCH_TODOS_ASYNC,
});

export const createTodoActionAsync: types.CreateTodoContract = (payload) => ({
    type: types.CREATE_TODO_ASYNC,
    payload,
});

export const updateTodoActionAsync: types.UpdateTodoContract = (payload) => ({
    type: types.UPDATE_TODO_ASYNC,
    payload,
});

export const deleteTodoActionAsync: types.DeleteTodoContract = (payload) => ({
    type: types.DELETE_TODO_ASYNC,
    payload,
});
