// Core
import { useDispatch as useReduxDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

// Types
import { RootState, AppDispatch } from '../../init/redux';

export const useDispatch: () => AppDispatch & ThunkDispatch<RootState, void, AnyAction> = useReduxDispatch;
