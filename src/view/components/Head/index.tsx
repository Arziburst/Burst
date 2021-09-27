// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import { StyledHead, IconCloudy, IconRainy, IconSunny, CurrentDate, CurrentDateText, CurrentDateNumber } from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    days: Types.DaysState
};

export const Head: FC<PropTypes> = ({ days }) => {
    const [ currentDay ] = days;
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
        <StyledHead>
            {type === 'cloudy' && <IconCloudy />}
            {type === 'rainy' && <IconRainy />}
            {type === 'sunny' && <IconSunny />}
            <CurrentDate>
                <CurrentDateText>{currentDateText}</CurrentDateText>
                <CurrentDateNumber>{currentDateNumber}</CurrentDateNumber>
            </CurrentDate>
        </StyledHead>
    );
};
