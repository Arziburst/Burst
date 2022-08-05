// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <p>Page: Main</p>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
