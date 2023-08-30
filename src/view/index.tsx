// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Routes
import { Routes } from './routes';

// Hooks
import { useTogglesRedux } from '../bus/client/toggles';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const App: FC = () => {
    const { setToggleAction: setTogglerAction } = useTogglesRedux();

    const setOnlineStatusHandler = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHandler();
        window.addEventListener('online', setOnlineStatusHandler);
        window.addEventListener('offline', setOnlineStatusHandler);
    }, []);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
