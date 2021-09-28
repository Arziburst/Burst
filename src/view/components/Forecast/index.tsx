// Core
import React, { FC } from 'react';
import moment from 'moment';

// Redux
import { useDaysFilter } from '../../../bus/daysFilter';

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

    const {   setCurrentDay  } = useDaysFilter();

    return (
        <StyledForecast>
            {currentWeek.map((day) => {
                if (day.type === 'cloudy') {
                    return (
                        <CloudyDay
                            selected
                            key = { day.id }
                            onClick = { () => setCurrentDay(day) }>
                            <DayText>{moment(day.day).locale('ru')
                                .format('dddd')}
                            </DayText>
                            <DayNumber>{day.temperature}</DayNumber>
                        </CloudyDay>
                    );
                }

                if (day.type === 'rainy') {
                    return (
                        <RainyDay
                            key = { day.id }
                            onClick = { () => setCurrentDay(day) }>
                            <DayText>{moment(day.day).locale('ru')
                                .format('dddd')}
                            </DayText>
                            <DayNumber>{day.temperature}</DayNumber>
                        </RainyDay>
                    );
                }

                if (day.type === 'sunny') {
                    return (
                        <SunnyDay
                            key = { day.id }
                            onClick = { () => setCurrentDay(day) }>
                            <DayText>{moment(day.day).locale('ru')
                                .format('dddd')}
                            </DayText>
                            <DayNumber>{day.temperature}</DayNumber>
                        </SunnyDay>
                    );
                }

                return null;
            })}
        </StyledForecast>
    );
};
