// Core
import { initialState } from './slice';

// Types
import * as types from './types';

export const setFiltersState: types.SetFiltersParamsContract = (state, action) => {
    state.filtersParams = action.payload;
};

export const setCurrentDay: types.SetCurrentDayContract = (state, action) => {
    state.currentDay = action.payload;
};

export const resetFiltersState: types.ResetFiltersState = () => {
    return initialState;
};
