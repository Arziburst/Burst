// Core
import { useDispatch } from '../../../tools/hooks';

import { fetch__entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';


export const use__entityName__(pascalCase)Thunk = () => {
    const dispatch = useDispatch();

    return {
        fetch__entityName__(pascalCase): () => void dispatch(fetch__entityName__(pascalCase)()),
    };
};
