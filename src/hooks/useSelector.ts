import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { AppState } from '../#init/redux/rootReducer';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
