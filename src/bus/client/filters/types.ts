// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Type
import { Day } from '../../days/types';

export type FiltersParams = {
    isCloudy: boolean | null,
    isSunny: boolean | null,
    minTemp: number | null,
    maxTemp: number | null,
}

export type FiltersState = {
    filtersParams : FiltersParams,
    currentDay: Day | null
};

export type SetFiltersParams = {
    isCloudy: FiltersParams['isCloudy'] | null,
    isSunny: FiltersParams['isSunny'] | null,
    minTemp: FiltersParams['minTemp'] | null,
    maxTemp: FiltersParams['maxTemp'] | null,
};

// Contracts
export type SetCurrentDayContract = CaseReducer<FiltersState, PayloadAction<Day>>;

export type SetFiltersParamsContract = CaseReducer<FiltersState, PayloadAction<SetFiltersParams>>;

export type ResetFiltersState = CaseReducer<FiltersState>;

