// Actions
import { __entityName__Actions } from '../../slice';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { __entityName__(pascalCase)State } from '../../types';
import { Fetch__entityName__(pascalCase)Contract } from '../types';

export function* fetch__entityName__(pascalCase)(action: ReturnType<Fetch__entityName__(pascalCase)Contract>) {
    console.log('🚀action', action);

    const result: __entityName__(pascalCase)State | null = yield makeRequest<__entityName__(pascalCase)State>({
        fetcher:           API.fetch__entityName__(pascalCase),
        succesAction:      __entityName__Actions.set__entityName__(pascalCase),
        successSideEffect: function* (result) {
            yield console.log('successSideEffect', result);
        },
    });

    if (result !== null) {
        console.log('outsideSuccessSideEffect');
    }
}
