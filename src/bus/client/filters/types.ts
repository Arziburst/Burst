// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Type
import { Day } from '../../days/types';

export type FilterData = {
    isCloudy: boolean | null;
    isSunny: boolean | null;
    minTemp: number | null;
    maxTemp: number | null;
};

export type FilterState = {
    filterData: FilterData;
    currentDay: Day | null;
};

export type SetFilterData = {
    isCloudy: FilterData['isCloudy'] | null;
    isSunny: FilterData['isSunny'] | null;
    minTemp: FilterData['minTemp'] | null;
    maxTemp: FilterData['maxTemp'] | null;
};

// Contracts
export type SetCurrentDayContract = CaseReducer<
FilterState,
PayloadAction<Day>
>;

export type SetFilterDataContract = CaseReducer<
FilterState,
PayloadAction<SetFilterData>
>;

export type ResetFilterStateContract = CaseReducer<FilterState>;
