// Core
import React, { FC } from 'react';
import moment from 'moment';

// Redux
import { useFilter } from '../../../bus/client/filters';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    day: Types.Day;
};

export const Day: FC<PropTypes> = ({ day }) => {
    const { currentDay, setCurrentDay } = useFilter();

    return (
        <S.StyledDay
            selected = { day.id === currentDay?.id }
            type = { day.type }
            onClick = { () => void setCurrentDay(day) }>
            <S.DayOfWeek>{moment(day.day).locale('ru')
                .format('dddd')}
            </S.DayOfWeek>
            <S.Temperature>{day.temperature}</S.Temperature>
        </S.StyledDay>
    );
};
