// Core
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import * as types from './types';

export const setFilter: types.SetFilterContract = (state, action: PayloadAction<types.SetFilterState>) => {
    // eslint-disable-next-line no-param-reassign
    // state = { ...state, ...action.payload };
    return { ...state, ...action.payload };
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
