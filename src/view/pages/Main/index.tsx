// Core
import React, { FC, useRef } from 'react';

// Hooks
import { useOnScreen } from '../../../tools/hooks';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

import { camelCase, filter } from 'lodash';

const Main: FC = () => {
    const divRef = useRef(null);
    const visible = useOnScreen(divRef, '0px');

    return (
        <Container>
            <div ref = { divRef }>
                {visible ? camelCase('visible') : camelCase('hide')}
                <p>{filter([ 3, 1, 6, 1, 78 ])}</p>
            </div>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
