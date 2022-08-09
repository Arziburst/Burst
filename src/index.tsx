// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

// Init
import { store as reduxStore } from './init';

// View
import { App } from './view';

const Root = () => {
    return (
        <ReduxProvider store = { reduxStore }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    );
};

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(<Root />);
}
