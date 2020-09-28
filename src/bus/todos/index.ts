// Core
import { useEffect } from 'react';
import { useSelector } from '../../hooks';

// Api
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';

// Toglers
import { useTogglersRedux } from '../client';

export const useTodosQuery = () => {
    const data = useSelector(({ todos }) => todos);
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

    useEffect(() => {
        fetchTodos();
    }, []);

    return {
        data,
        loading: isTodosFetching,
    };
};

export const useTodosMutations = () => {
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

    return {
        createTodo,
        updateTodo,
        deleteTodo,
        loading: isTodosFetching,
    };
};
