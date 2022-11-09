// Core
// import { useEffect } from 'react';

// Tools
import { useDispatch, useSelector } from '../../tools/hooks'; /* Typed selector */

// Slice
import { __entityName__Actions } from './slice';

// Types
import { __entityName__(pascalCase) } from './types';

// MarkerGen middleware

export const use__entityName__(pascalCase) = () => {
    // MarkerGen api hook

    const dispatch = useDispatch();
    const __entityName__ = useSelector((state) => state.__entityName__);

    // useEffect(() => {
    //     // MarkerGen use api hook
    // }, []);

    return {
        __entityName__,
        set__entityName__(pascalCase): (payload: __entityName__(pascalCase)) => dispatch(__entityName__Actions.set__entityName__(pascalCase)(payload)),
    };
};
