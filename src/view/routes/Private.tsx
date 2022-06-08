// Core
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Main /> }
                path = { book.ROOT }
            />
        </Routes>
    );
};
