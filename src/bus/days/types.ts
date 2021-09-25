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

export type Day = {
    id: string
    rain_probability: number
    humidity: number
    day: number
    temperature: number
    type: 'cloudy' | 'rainy' | 'sunny'
}

export type DaysState = Array<Day>

// Contracts
export type SetDaysContract = CaseReducer<DaysState, PayloadAction<DaysState>>
