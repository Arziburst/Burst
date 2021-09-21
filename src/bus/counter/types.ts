// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type CounterState = {
    value: number
}

// Contracts
export type IncrementContract = CaseReducer<CounterState>
export type DecrementContract = CaseReducer<CounterState>
export type IncrementByAmountContract = CaseReducer<CounterState, PayloadAction<number>>
