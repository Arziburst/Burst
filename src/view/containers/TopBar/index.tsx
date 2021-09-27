// Core
import React, { FC } from 'react';

// Components
import { UserMenu } from './UserMenu';

// Images
import logo from '../../../assets/images/logo.png';
import patrick from '../../../assets/images/patrick.jpg';

// Styles
import { TopbarContainer, Logo } from './styles';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            <img
                alt = 'patrick'
                src = { patrick }
            />
            <h1>Boilerplate</h1>
            <UserMenu />
        </TopbarContainer>
    );
};
