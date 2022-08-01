// Core
import { useDispatch as useAppDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// Types
import { RootState } from '../../init/redux';

export const useDispatch: () => AnyAction & ThunkDispatch<RootState, void, AnyAction> = useAppDispatch;
