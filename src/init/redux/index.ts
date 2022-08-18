// Core
import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query'; /* Uncomment If you use RTKQuery */

// Reducers
import toggles from '../../bus/client/toggles';
// import __entityName__ from '../../bus/__entityName__/slice';

// RTKQuery API
// import { __entityName__Api } from '../../bus/__entityName__/__entityName__.api';


// Middleware
import {
    middleware,
    // sagaMiddleware, /* Uncomment If you use saga middleware */
} from './middleware';

// Saga
// import { rootSaga } from './rootSaga'; /* Uncomment If you use saga middleware */

export const store = configureStore({
    reducer: {
        toggles,
        // __entityName__,
        // [__entityName__.reducerPath]: __entityName__.reducer, /* If you use RTKQuery */
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

// sagaMiddleware.run(rootSaga); /* Uncomment If you use saga middleware */

// optional but required for refetchOnFocus/refetchOnReconnect behavior
// see https://redux-toolkit.js.org/rtk-query/usage/rtk-query-with-redux#setuplisteners

// setupListeners(store.dispatch); /* Uncomment If you use RTKQuery */
