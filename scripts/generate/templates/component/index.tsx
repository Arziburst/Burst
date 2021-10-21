// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const __componentName__(pascalCase): FC<PropTypes> = () => {
    return (
        <S.Container>
            Component: __componentName__(pascalCase)
        </S.Container>
    );
};
