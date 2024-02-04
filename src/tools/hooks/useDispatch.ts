// Core
import { useDispatch as useReduxDispatch } from 'react-redux';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

// Types
import { RootState, AppDispatch } from '../../init';

export const useDispatch: () => AppDispatch & ThunkDispatch<RootState, void, UnknownAction> = useReduxDispatch;
