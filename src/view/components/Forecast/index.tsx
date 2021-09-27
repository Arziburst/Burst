// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import {
    StyledForecast,
    CloudyDay,
    RainyDay,
    SunnyDay,
    DayText,
    DayNumber,
} from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    days: Types.DaysState
};

export const Forecast: FC<PropTypes> = ({ days }) => {
    const currentWeek = days.slice(0, 7);

    return (
        <StyledForecast>
            {currentWeek.map(({ id, day, temperature, type }) => {
                if (type === 'cloudy') {
                    return (
                        <CloudyDay
                            selected
                            key = { id }>
                            <DayText>{moment(day).locale('ru')
                                .format('dddd')}
                            </DayText>
                            <DayNumber>{temperature}</DayNumber>
                        </CloudyDay>
                    );
                }

                if (type === 'rainy') {
                    return (
                        <RainyDay
                            key = { id }>
                            <DayText>{moment(day).locale('ru')
                                .format('dddd')}
                            </DayText>
                            <DayNumber>{temperature}</DayNumber>
                        </RainyDay>
                    );
                }

                if (type === 'sunny') {
                    return (
                        <SunnyDay
                            key = { id }>
                            <DayText>{moment(day).locale('ru')
                                .format('dddd')}
                            </DayText>
                            <DayNumber>{temperature}</DayNumber>
                        </SunnyDay>
                    );
                }

                return null;
            })}
        </StyledForecast>
    );
};
