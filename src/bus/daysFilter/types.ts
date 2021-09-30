// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Type
import { Day } from '../days/types';

export type FilterState = {
    isCloudy: boolean | null,
    isSunny: boolean | null,
    minTemp: number | null,
    maxTemp: number | null,
    currentDay: Day | null
};

export type SetFilterState = {
    isCloudy: FilterState['isCloudy'] | null,
    isSunny: FilterState['isSunny'] | null,
    minTemp: FilterState['minTemp'] | null,
    maxTemp: FilterState['maxTemp'] | null,
};

// Contracts
export type SetCurrentDayContract = CaseReducer<FilterState, PayloadAction<Day>>;

export type SetFilterStateContract = CaseReducer<FilterState, PayloadAction<SetFilterState>>;

export type ResetFilterState = CaseReducer<FilterState>;

