// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Register } from '../pages';

export const Public: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = '/register'>
                <Register />
            </Route>

            <Redirect to = '/register' />
        </Switch>
    );
};
