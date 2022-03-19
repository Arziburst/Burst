// Core
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Main } from '../pages';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Main /> }
                path = '/'
            />
        </Routes>
    );
};
