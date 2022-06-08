// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Types
type PropTypes = {
    /* type props here */
}

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const Lesson1: FC<PropTypes> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <p>Page: Lesson1</p>
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson1 />
    </ErrorBoundary>
);
