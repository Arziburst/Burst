// Tools
import { ControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const fetchMessages: () => Promise<types.MessagesState> = async () => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'fetchMessages failed',
            statusCode: response.status,
            data:       {
                test: '123',
            },
        });
    }

    return response.json();
};
