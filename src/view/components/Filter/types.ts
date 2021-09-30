// Type
export type DayTypeInitialState = {
    isCloudy: boolean | null,
    isSunny: boolean | null,
}

export type TemperatureInitialState = {
    minTemp: number | null,
    maxTemp: number | null
}

// Tools
export const temperatureInitialState: TemperatureInitialState = {
    minTemp: null,
    maxTemp: null,
};

export const dayTypeInitialState: DayTypeInitialState = {
    isCloudy: null,
    isSunny:  null,
};
