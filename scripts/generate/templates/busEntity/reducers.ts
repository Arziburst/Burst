// Types
import * as types from './types';

export const set__entityName__(pascalCase): types.BaseContact<types.__entityName__(pascalCase)> = (__, action) => {
    return action.payload;
};
