// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks'; /* Typed selector */

// MarkerGen middleware

export const use__entityName__(pascalCase) = () => {
    // MarkerGen api hook

    const __entityName__ = useSelector((state) => state.__entityName__);

    // useEffect(() => {
    //     // MarkerGen use api hook
    // }, []);

    return {
        __entityName__,
    };
};
