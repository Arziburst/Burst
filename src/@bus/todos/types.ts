// ----------------------------- Core -----------------------------
export type Todo = {
    id: string
    text: string
    isCompleted: boolean
};

export type Todos = Array<Todo>;

// ----------------------------- Fetch -----------------------------
export const SET_TODOS = 'SET_TODOS';
export type SetTodosActionType = {
    type: typeof SET_TODOS;
    payload: Todos;
};
export type SetTodosContract = (payload: Todos) => SetTodosActionType

// ----------------------------- Create -----------------------------
export const SET_TODO = 'SET_TODO';
export type SetTodoActionType = {
    type: typeof SET_TODO;
    payload: Todo;
};
export type SetTodoContract = (payload: Todo) => SetTodoActionType

// ----------------------------- Update -----------------------------
export const UPDATE_TODO = 'UPDATE_TODO';
export type UpdateTodoActionType = {
    type: typeof UPDATE_TODO;
    payload: Todo;
};
export type UpdateTodoContract = (payload: Todo) => UpdateTodoActionType

// ----------------------------- Delete -----------------------------
export const DELETE_TODO = 'DELETE_TODO';
export type DeleteTodoActionType = {
    type: typeof DELETE_TODO;
    payload: string;
};
export type DeleteTodoContract = (payload: string) => DeleteTodoActionType

export type TodosActionTypes =
    | SetTodosActionType
    | SetTodoActionType
    | UpdateTodoActionType
    | DeleteTodoActionType

