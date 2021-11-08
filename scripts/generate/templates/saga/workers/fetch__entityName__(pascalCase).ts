// Actions
import { __entityName__Actions } from '../../slice';
import * as sagaActions from '../sagaActions';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { __entityName__(pascalCase) } from '../../types';

export function* fetch__entityName__(pascalCase)(action: ReturnType<typeof sagaActions.fetch__entityName__(pascalCase)Action>) {
    console.log('🚀action', action);

    const result: __entityName__(pascalCase) | null = yield makeRequest<__entityName__(pascalCase)>({
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
