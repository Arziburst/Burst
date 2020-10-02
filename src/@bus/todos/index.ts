// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';

// Api
import {
    fetchTodosActionAsync,
    createTodoActionAsync,
    updateTodoActionAsync,
    deleteTodoActionAsync,
} from './saga/actions';

// Toglers
import { useTogglersRedux } from '../client';

// Types
import {
    CreateTodoInput,
    UpdateTodoInput,
    DeleteTodoInput,
} from './saga/types';

export const useTodosQuery = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ todos }) => todos);
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

    useEffect(() => {
        dispatch(fetchTodosActionAsync());
    }, []);

    return {
        data,
        loading: isTodosFetching,
    };
};

export const useTodosMutations = () => {
    const dispatch = useDispatch();
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

    return {
        createTodo: (payload: CreateTodoInput) => dispatch(createTodoActionAsync(payload)),
        updateTodo: (payload: UpdateTodoInput) => dispatch(updateTodoActionAsync(payload)),
        deleteTodo: (payload: DeleteTodoInput) => dispatch(deleteTodoActionAsync(payload)),
        loading:    isTodosFetching,
    };
};
