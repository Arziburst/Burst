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

export const __containerName__(pascalCase): FC<PropTypes> = () => {
    return (
        <S.Container>
            Container: __containerName__(pascalCase)
        </S.Container>
    );
};
