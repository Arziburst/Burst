// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../@bus/client';
import { todosReducer as todos } from '../../@bus/todos/reducer';

export const rootReducer = combineReducers({
    togglers,
    todos,
});

export type AppState = ReturnType<typeof rootReducer>;
