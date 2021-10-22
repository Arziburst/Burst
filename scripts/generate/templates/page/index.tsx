// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const __pageName__(pascalCase): FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: __pageName__(pascalCase)
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <__pageName__(pascalCase) />
    </ErrorBoundary>
);
