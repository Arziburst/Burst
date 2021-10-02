// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    currentDay: Types.Day | null;
};

export const Head: FC<PropTypes> = ({ currentDay }) => {
    const day = moment(currentDay?.day).locale('ru')
        .format('dddd');

    const date = moment(currentDay?.day).locale('ru')
        .format('D MMMM');

    return (
        <S.StyledHead>
            {currentDay && <S.Icon type = { currentDay.type } />}
            <S.FullDate>
                <S.Day>{day}</S.Day>
                <S.Date>{date}</S.Date>
            </S.FullDate>
        </S.StyledHead>
    );
};
