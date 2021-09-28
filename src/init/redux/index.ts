// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import messages from '../../bus/messages/slice';
import days from '../../bus/days/slice';
import filter from '../../bus/daysFilter/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        messages,
        days,
        filter,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
