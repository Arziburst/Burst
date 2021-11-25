// Core
import React, { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Pages
import { Main } from '../pages';

export const Private: FC = () => {
    const routes = useRoutes([
        { path: '/', element: <Main /> },
        { path: '*', element: <Navigate to = '/' /> },
    ]);

    return routes;
};
