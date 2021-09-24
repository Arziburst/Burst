// Core
import React from 'react';

// Styles
import { StyledCurrentWeather, Temperature, RainyMeta, HumidityMeta } from './styles';

export const CurrentWeather = () => {
    return (
        <StyledCurrentWeather>
            <Temperature>17</Temperature>
            <p>
                <RainyMeta>%35</RainyMeta>
                <HumidityMeta>%72</HumidityMeta>
            </p>
        </StyledCurrentWeather>
    );
};
