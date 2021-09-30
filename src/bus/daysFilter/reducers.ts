// Core
import { initialState } from './slice';

// Types
import * as types from './types';

export const setFilterState: types.SetFilterStateContract = (state, action) => {
    return { ...state, ...action.payload };
};

export const setCurrentDay: types.SetCurrentDayContract = (state, action) => {
    state.currentDay = action.payload;
};

export const resetFilterState: types.ResetFilterState = () => {
    return initialState;
};
