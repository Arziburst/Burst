// Types
import * as types from '../../types';
type FetchContact = () => Promise<types.__entityName__(pascalCase)>

// Tools
import { API_URL } from '../../../../init/constants';
const ROUTE = '';

export const fetch__entityName__(pascalCase): FetchContact = async () => {
    const response = await fetch(`${API_URL}/${ROUTE}`, {
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
