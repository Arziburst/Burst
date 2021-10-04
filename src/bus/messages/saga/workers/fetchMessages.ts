// Types
import { MessagesState } from '../../types';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { IControlledError, makeRequest } from '../../../../tools/utils';

export function* fetchMessages() {
    const combineResult: IControlledError & MessagesState = yield makeRequest<MessagesState>({
        fetcher:          API.fetchMessages,
        togglerType:      'isMessagesFetching',
        succesAction:     messagesActions.setMessages,
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    }

    // if (combineResult.length) {
    //     console.log(combineResult);
    // }
}
