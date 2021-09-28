// Core
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import * as types from './types';

export const setFilter: types.SetFilterContract = (state, action: PayloadAction<types.SetFilterState>) => {
    return { ...state, ...action.payload };
};

export const setCurrentDay: types.SetCurrentDayContract = (state, action: PayloadAction<types.CurrentDay>) => {
    state.currentDay = action.payload;
};

export const toggleOption: types.ToggleOptionContract = (state, action: PayloadAction<number>) => {
    if (action.payload === 0) {
        state.isSunny = false;
        state.isCloudy = true;
    }

    if (action.payload === 1) {
        state.isSunny = true;
        state.isCloudy = false;
    }
};
