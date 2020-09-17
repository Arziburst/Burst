export type Todo = {
    id: string
    text: string
    isCompleted: boolean
};

export type Todos = Array<Todo>;

export type FetchTodos = () => Promise<Todos>;

// Create
export type CreateTodoInput = {
    body: {
        text: string
    }
};
export type CreateTodoType = (input: CreateTodoInput) => Promise<Todo>;

// Update
export type UpdateTodoInput = {
    todoId: string
    body: {
        isCompleted: boolean
    }
};
export type UpdateTodo = (input: UpdateTodoInput) => Promise<Todo>;

// Delete
export type DeleteTodoInput = {
    todoId: string
};
export type DeleteTodo = (input: DeleteTodoInput) => Promise<boolean>;

