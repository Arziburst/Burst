// Types
import * as types from '../types';

// fetch__entityName__(pascalCase) cases
export const __entityName__(pascalCase)Pending = (state: types.__entityName__(pascalCase)State) => {
    state!.status = 'loading';
    state!.error = null;
};

export const __entityName__(pascalCase)Fullfiled = (state: types.__entityName__(pascalCase)State, action: types.ActionType) => {
    state!.__entityName__ = action.payload;
    state!.status = 'idle';
    state!.error = null;
};

export const __entityName__(pascalCase)Rejected = (state: types.__entityName__(pascalCase)State, action: types.ActionType) => {
    state!.status = 'failed';
    state!.__entityName__ = [];
    state!.error = action.error;
};
