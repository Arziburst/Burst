// Types
import * as types from './types';

export const setDays: types.SetDaysContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
