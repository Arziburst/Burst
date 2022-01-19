// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// Pages
import { Main, Register, Items, Item } from '../pages';

export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:     '',
            element:  <Main />,
            children: [
                { path: 'register', element: <Register /> },
                {
                    path:     'items',
                    element:  <Items />,
                    children: [{ path: ':id', element: <Item /> }],
                },
                { path: '*', element: <Navigate to = 'register' /> },
            ],
        },
    ]);

    return routes;
};
