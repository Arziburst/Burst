// Types
import { Todo, Todos } from '../../types';
import { CreateTodoInput, DeleteTodoInput, UpdateTodoInput } from '../types';

export type FetchTodos = () => Promise<Todos>;
export type CreateTodo = (input: CreateTodoInput) => () => Promise<Todo>;
export type UpdateTodo = (input: UpdateTodoInput) => () => Promise<Todo>;
export type DeleteTodo = (input: DeleteTodoInput) => () => Promise<Boolean>;
