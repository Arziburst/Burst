// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }} = useTogglersRedux();

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
