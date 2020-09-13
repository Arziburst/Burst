// Core
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { Container } from './styles';

export const UserMenu: FC = () => {
    return (
        <Container isActive>
            <FontAwesomeIcon
                icon = 'check'
                style = {{ width: 40, height: 40 }}
            />
        </Container>
    );
};
