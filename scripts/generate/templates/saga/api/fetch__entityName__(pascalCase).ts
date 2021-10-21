// Tools
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const fetch__entityName__(pascalCase): () => Promise<types.__entityName__(pascalCase)State> = async () => {
    const response = await fetch(`${API_URL}/`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    return response.json();
};
