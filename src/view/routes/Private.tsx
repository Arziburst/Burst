// Core
import React, { FC, useEffect } from 'react';
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom';

// Pages
import { WeatherWidget } from '../pages';

// Book
import * as book from './book';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.match(/login|register/)) {
            push(book.ROOT);
        }
    });

    return (
        <Switch>
            <Route
                exact
                path = { book.ROOT }>
                <WeatherWidget/>
            </Route>
            <Redirect to = { book.ROOT } />
        </Switch>
    );
};
