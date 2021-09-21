import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../../init/redux';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
