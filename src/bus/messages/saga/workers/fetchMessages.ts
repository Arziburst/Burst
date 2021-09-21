// Types
import { MessagesState } from '../../types';

// Sync actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Instruments
import { IControlledError, makeRequest } from '../../../../tools/utils';

export function* fetchMessages() {
    const combineResult: IControlledError & MessagesState = yield makeRequest<MessagesState>({
        fetcher:          API.fetchMessages,
        togglerType:      'isMessagesFetching',
        fill:             messagesActions.setMessages,
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    }

    // if (combineResult.length) {
    //     console.log(combineResult);
    // }
}
