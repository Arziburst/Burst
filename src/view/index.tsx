// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Routes
import { Routes } from './routes';

// Hooks
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
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
