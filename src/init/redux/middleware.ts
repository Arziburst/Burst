// ESlint
/* eslint-disable array-bracket-newline */

// Middlewares
import { Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// import createSagaMiddleware from 'redux-saga'; /* Choose one technology */
// import thunkMiddleware from 'redux-thunk';

const isDev = process.env.NODE_ENV === 'development';
// const sagaMiddleware = createSagaMiddleware(); /* Uncomment If you use saga middleware */

const middleware: Middleware[] = [
    // sagaMiddleware, /* Choose one technology */
    // thunkMiddleware,
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
