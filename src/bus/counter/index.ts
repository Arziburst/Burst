// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Types
export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
};

// Slice
export const counterSlice = createSlice({
    name:     'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Interfaces
const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// Hooks
export const useCounter = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    return {
        counterState:      value,
        increment:         () => void dispatch(counterActions.increment()),
        decrement:         () => void dispatch(counterActions.decrement()),
        incrementByAmount: (payload: number) => void dispatch(counterActions.incrementByAmount(payload)),
    };
};
