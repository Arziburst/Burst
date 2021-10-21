// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
// import {} from './saga/actions'

export const use__entityName__(pascalCase) = () => {
    const __entityName__ = useSelector((state) => state.__entityName__);

    // useEffect(() => {

    // }, []);

    return {
        __entityName__,
    };
};

export const use__entityName__(pascalCase)Actions = () => {
    const dispatch = useDispatch();

    return {
        __entityName__Action: dispatch({}),
    };
};
