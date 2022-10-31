// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
    /* type props here */
}

export const __containerName__(pascalCase): FC<PropTypes> = ({children}) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    );
};
