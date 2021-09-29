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

export const toggleOption: types.ToggleOptionContract = (state, action: PayloadAction<number | undefined>) => {
    if (action.payload === 'setCloudy') {
        state.isSunny = false;
        state.isCloudy = true;

        return;
    }

    if (action.payload === 'setSunny') {
        state.isSunny = true;
        state.isCloudy = false;

        return;
    }

    state.isSunny = false;
    state.isCloudy = false;
};
