// Core
import React from 'react';

// Styles
import { StyledHead, IconCloudy, CurrentDate, CurrentDateText, CurrentDateNumber } from './styles';

export const Head = () => {
    return (
        <StyledHead>
            <IconCloudy />
            <CurrentDate>
                <CurrentDateText>Пятница</CurrentDateText>
                <CurrentDateNumber>29 ноября</CurrentDateNumber>
            </CurrentDate>
        </StyledHead>
    );
};
