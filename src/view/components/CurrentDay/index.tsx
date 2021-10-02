// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/days/types';

type PropTypes = {
    currentDay: Types.Day | null;
};

export const CurrentDay: FC<PropTypes> = ({ currentDay }) => (
    <S.StyledCurrentDay>
        <S.Temperature>{currentDay?.temperature}</S.Temperature>
        <p>
            <S.Meta type = 'rain-probability'>{`%${currentDay?.rain_probability}`}</S.Meta>
            <S.Meta type = 'humidity'>{`%${currentDay?.humidity}`}</S.Meta>
        </p>
    </S.StyledCurrentDay>
);
