
// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query-devtools';

// App initializaion
import {
    history as routerHistory,
    store as reduxStore,
    registerServiceWorker,
} from './@init';

// App
import { App } from './containers/App';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    return (
        <>
            {
                process.env.NODE_ENV === 'development' && (
                    <ReactQueryDevtools
                        position = 'bottom-right'
                    />
                )
            }
            <ReduxProvider store = { reduxStore }>
                <Router history = { routerHistory }>
                    <App />
                </Router>
            </ReduxProvider>
        </>
    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
