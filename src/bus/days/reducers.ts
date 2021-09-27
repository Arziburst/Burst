// Types
import * as types from './types';

export const setDays: types.SetDaysContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const setCurrentDay: types.SetCurrentDayContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
