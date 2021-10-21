// Types
import { __entityName__(pascalCase)State } from '../../types';

// Actions
import { __entityName__Actions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* fetch__entityName__(pascalCase)() {
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
