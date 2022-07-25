// Types
import * as types from './types';

export const set__entityName__(pascalCase): types.BaseContact<types.__entityName__(pascalCase)> = (state, action) => {
    state!.__entityName__ = action.payload;
};
