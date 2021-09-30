// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type DayType = 'cloudy' | 'rainy' | 'sunny';

export type Day = {
    id: string;
    rain_probability: number;
    humidity: number;
    day: number;
    temperature: number;
    type: DayType
};

export type DaysState = Array<Day>;

// Contracts
export type SetDaysContract = CaseReducer<DaysState, PayloadAction<DaysState>>;

