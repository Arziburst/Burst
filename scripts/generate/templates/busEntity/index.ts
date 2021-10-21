// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Hooks
export const use__entityName__(pascalCase) = () => {
    const dispatch = useDispatch();
    const __entityName__ = useSelector((state) => state.__entityName__);

    return {
        __entityName__,
    };
};
