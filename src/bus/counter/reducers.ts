// Core
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import * as types from './types';

export const increment: types.IncrementContract = (state) => {
    state.value += 1;
};

export const decrement: types.DecrementContract = (state) => {
    state.value -= 1;
};

export const incrementByAmount: types.IncrementByAmountContract = (state, action: PayloadAction<number>) => {
    state.value = action.payload;
};
