// Fetch
export const FETCH_TODOS_ASYNC = 'FETCH_TODOS_ASYNC';
export type FetchTodosActionAsync = {
    type: typeof FETCH_TODOS_ASYNC;
};
export type FetchTodosContract = () => FetchTodosActionAsync

// Create
export type CreateTodoInput = {
    body: {
        text: string
    }
};
export const CREATE_TODO_ASYNC = 'CREATE_TODO_ASYNC';
export type CreateTodoActionAsync = {
    type: typeof CREATE_TODO_ASYNC;
    payload: CreateTodoInput
};
export type CreateTodoContract = (payload: CreateTodoInput) => CreateTodoActionAsync

// Update
export type UpdateTodoInput = {
    todoId: string
    body: {
        isCompleted: boolean
    }
};
export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';
export type UpdateTodoActionAsync = {
    type: typeof UPDATE_TODO_ASYNC;
    payload: UpdateTodoInput
};
export type UpdateTodoContract = (payload: UpdateTodoInput) => UpdateTodoActionAsync

// Delete
export type DeleteTodoInput = {
    todoId: string
};
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';
export type DeleteTodoActionAsync = {
    type: typeof DELETE_TODO_ASYNC;
    payload: DeleteTodoInput
};
export type DeleteTodoContract = (payload: DeleteTodoInput) => DeleteTodoActionAsync
