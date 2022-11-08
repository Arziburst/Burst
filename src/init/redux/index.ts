// Core
import { configureStore } from '@reduxjs/toolkit';

// MarkerGen reducers
import toggles from '../../bus/client/toggles';

// Middleware
import {
    middleware,
    // MarkerGen sagaMiddleware
} from './middleware';

// MarkerGen import rootSaga

export const store = configureStore({
    reducer: {
        // MarkerGen add reducer
        toggles,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

// MarkerGen run rootSaga
