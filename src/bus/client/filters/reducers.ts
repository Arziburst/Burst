// Core
import { initialState } from './slice';

// Types
import * as types from './types';

export const setFilterData: types.SetFilterDataContract = (state, action) => {
    state.filterData = action.payload;
};

export const setCurrentDay: types.SetCurrentDayContract = (state, action) => {
    state.currentDay = action.payload;
};

export const resetFilterState: types.ResetFilterStateContract = () => {
    return initialState;
};
