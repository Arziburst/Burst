// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks'; /* Typed selector */

// Middleware
// import { use__entityName__(pascalCase)Saga } from './saga'; /* Choose one technology */
// import { use__entityName__(pascalCase)Thunk } from './thunk';

export const use__entityName__(pascalCase) = () => {
    // const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Saga();  /* Saga api hook */
    // const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Thunk();  /* Thunk api hook */

    /* Add __entityName__ slice reducer to ./src/init/redux/index.ts */
    const __entityName__ = useSelector((state) => state.__entityName__);

    // useEffect(() => {
    //     fetch__entityName__(pascalCase)();
    // }, []);

    return {
        __entityName__,
    };
};
