// Core
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

// Types
import { RootState } from '../../init/redux';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
