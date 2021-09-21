// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
