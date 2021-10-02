// Core
import React, { FC } from 'react';

// Components
import { Day } from '../';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    days: Types.DaysState;
};

export const Forecast: FC<PropTypes> = ({ days }) => {
    const week = days.slice(0, 7);

    return (
        <S.StyledForecast>
            {week.map((day) => (
                <Day
                    day = { day }
                    key = { day.id }
                />
            ))}
        </S.StyledForecast>
    );
};
