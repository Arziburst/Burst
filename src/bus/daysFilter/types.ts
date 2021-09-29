// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// {
//     "id": "6210658e-5293-44db-a79e-e92eae33825a",
//     "rain_probability": 35,
//     "humidity": 49,
//     "day": 1632546000000,
//     "temperature": 21,
//     "type": "cloudy"
// }

export type CurrentDay = {
    id: string;
    rain_probability: number;
    humidity: number;
    day: number;
    temperature: number;
    type: 'cloudy' | 'rainy' | 'sunny';
};

export type SetFilterState = {
    minTemp: number | string,
    maxTemp: number | string,
    isFiltered: boolean
};

export type FilterState = {
    isCloudy: boolean,
    isSunny: boolean,
    minTemp: number | string,
    maxTemp: number | string,
    isFiltered: boolean,
    currentDay: CurrentDay
};

// Contracts
export type SetFilterContract = CaseReducer<FilterState, PayloadAction<SetFilterState>>;
export type SetCurrentDayContract = CaseReducer<FilterState, PayloadAction<CurrentDay>>;
export type ToggleOptionContract = CaseReducer<FilterState, PayloadAction<number | undefined>>;

