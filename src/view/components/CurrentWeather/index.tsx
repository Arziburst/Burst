// Core
import React, { FC } from 'react';

// Styles
import { StyledCurrentWeather, Temperature, RainyMeta, HumidityMeta } from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    days: Types.DaysState
};

export const CurrentWeather: FC<PropTypes> = ({ days }) => {
    const [ currentDay ] = days;
    const temperature = currentDay?.temperature;
    const rainProbability = currentDay?.rain_probability;
    const humidity = currentDay?.humidity;

    return (
        <StyledCurrentWeather>
            <Temperature>{temperature}</Temperature>
            <p>
                <RainyMeta>{`%${rainProbability}`}</RainyMeta>
                <HumidityMeta>{`%${humidity}`}</HumidityMeta>
            </p>
        </StyledCurrentWeather>
    );
};
