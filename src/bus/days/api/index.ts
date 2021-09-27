// Tools
import { API_URL } from '../../../init/constants';

// Types
import { FetchDaysContract } from './types';

export const fetchDays: FetchDaysContract = async () => {
    try {
        const response = await fetch(API_URL, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('fetchDays failed');
        }

        const { data } = await response.json();

        return data;
    } catch (error) {
        console.log(error);

        return null;
    }
};
