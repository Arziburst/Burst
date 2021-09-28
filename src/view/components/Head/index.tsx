// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import { StyledHead, IconCloudy, IconRainy, IconSunny, CurrentDate, CurrentDateText, CurrentDateNumber } from './styles';

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
