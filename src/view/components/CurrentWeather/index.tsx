// Core
import React, { FC } from 'react';

// Styles
import { StyledCurrentWeather, Temperature, RainyMeta, HumidityMeta } from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    activeDay?: Types.Day
};

export const CurrentWeather: FC<PropTypes> = ({ activeDay }) => {
    console.log(activeDay);
    // const [ currentDay ] = days;
    const temperature = activeDay?.temperature;
    const rainProbability = activeDay?.rain_probability;
    const humidity = activeDay?.humidity;

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
