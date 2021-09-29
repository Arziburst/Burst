// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    activeDay?: Types.Day
};

export const Head: FC<PropTypes> = ({ activeDay }) => {
    // const [ currentDay ] = days;
    let currentDateText = '';
    let currentDateNumber = '';
    let type = null;

    if (activeDay?.day && activeDay?.type) {
        currentDateText = moment(activeDay.day).locale('ru')
            .format('dddd');
        currentDateNumber = moment(activeDay.day).locale('ru')
            .format('D MMMM');
        type = activeDay.type;
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
