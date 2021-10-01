// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    currentDay?: Types.Day | null;
};

export const Head: FC<PropTypes> = ({ currentDay }) => {
    // const [ currentDay ] = days;
    let currentDateText = '';
    let currentDateNumber = '';
    let type = null;

    if (currentDay?.day && currentDay?.type) {
        currentDateText = moment(currentDay.day).locale('ru')
            .format('dddd');
        currentDateNumber = moment(currentDay.day).locale('ru')
            .format('D MMMM');
        type = currentDay.type;
    }

    return (
        <S.StyledHead>
            {type === 'cloudy' && <S.IconCloudy />}
            {type === 'rainy' && <S.IconRainy />}
            {type === 'sunny' && <S.IconSunny />}
            <S.CurrentDate>
                <S.CurrentDateText>{currentDateText}</S.CurrentDateText>
                <S.CurrentDateNumber>{currentDateNumber}</S.CurrentDateNumber>
            </S.CurrentDate>
        </S.StyledHead>
    );
};
