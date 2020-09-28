
// Fetch
export type FetchTodos = () => Promise<void>;

// Create
export type CreateTodoInput = {
    body: {
        text: string
    }
};
export type CreateTodoType = (input: CreateTodoInput) => Promise<void>;

// Update
export type UpdateTodoInput = {
    todoId: string
    body: {
        isCompleted: boolean
    }
};
export type UpdateTodo = (input: UpdateTodoInput) => Promise<void>;

// Delete
export type DeleteTodoInput = {
    todoId: string
};
export type DeleteTodo = (input: DeleteTodoInput) => Promise<void>;
