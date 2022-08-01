// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Book
import { LESSON1 } from '../../routes/book';

const Main: FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <p>Page: Main</p>
            <button onClick = { () => navigate(LESSON1) }>Lesson 1</button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
