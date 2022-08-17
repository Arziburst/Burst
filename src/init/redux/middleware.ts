// ESlint
/* eslint-disable array-bracket-newline */

// Middlewares
import { Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { getDefaultMiddleware } from '@reduxjs/toolkit'; /* Uncomment If you use RTK Query */

// RTKQuery API
// import {__entityName__Api} from '../../bus/__entityName__/__entityName__.api';

// import createSagaMiddleware from 'redux-saga'; /* Choose one technology */
// import thunkMiddleware from 'redux-thunk';

const isDev = process.env.NODE_ENV === 'development';
// const sagaMiddleware = createSagaMiddleware(); /* Uncomment If you use saga middleware */

const middleware: Middleware[] = [
    ...getDefaultMiddleware(), /* Uncomment if you use RTKQuery */
    // sagaMiddleware, /* Choose one technology */
    // thunkMiddleware,
    // __entityName__Api.middleware, /* Insert if you use RTKQuery */
];

isDev && middleware.push(
    createLogger({
        duration:  true,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
    }),
);

export {
    middleware,
    // sagaMiddleware, /* Uncomment If you use saga middleware */
};
