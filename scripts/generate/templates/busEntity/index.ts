// Core
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
// import * as sagaActions from './saga/sagaActions';

export const use__entityName__(pascalCase) = () => {
    // const dispatch = useDispatch();
    const __entityName__ = useSelector((state) => state.__entityName__); // Add __entityName__ to ./src/init/redux/index.ts

    // useEffect(() => {
    //     dispatch(sagaActions.fetch__entityName__(pascalCase)Action('any payload'));
    // }, []);

    return {
        __entityName__,
    };
};
