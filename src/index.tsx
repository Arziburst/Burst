
// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// App initializaion
import {
    store as reduxStore,
    persistor as reduxPersistor,
    history as routerHistory,
    registerServiceWorker,
} from './#init';

// App
import { App } from './@view';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    return (
        <ReduxProvider store = { reduxStore }>
            <PersistGate
                loading = { null }
                persistor = { reduxPersistor }>
                <Router history = { routerHistory }>
                    <App />
                </Router>
            </PersistGate>
        </ReduxProvider>
    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
