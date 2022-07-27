// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Tools
import { API_URL } from '../../../init/constants';
import { customFetchThunk } from '../../../tools/utils/customFetchThunk';

// Types
import { __entityName__(pascalCase) } from '../types';

// State
import { sliceName } from '../slice';
import { RootState } from '../../../init';

// Action
export const fetch__entityName__(pascalCase)Action = createAction(`${sliceName}/FETCH_${sliceName.toUpperCase()}_ASYNC`);

export const fetch__entityName__(pascalCase) = createAsyncThunk<__entityName__(pascalCase), undefined, {state: RootState}>(
    fetch__entityName__(pascalCase)Action.type,
    async (_, { getState }): Promise<any> => {
        const result: __entityName__(pascalCase) = await customFetchThunk<any>({
            successStatusCode: 200,
            fetch:             () => fetch(`${API_URL}`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        });

        getState().__entityName__ = result;
    },
);
