// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import { fetchMessagesActionAsync } from './saga/actions';

// Types
// import { MessagesState } from './types';

// Interfaces
// import { messagesActions } from './slice';

// Hooks
export const useMessages = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        dispatch(fetchMessagesActionAsync());
    }, []);

    return {
        ...selector,
    };
};
