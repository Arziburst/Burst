// Core
import React, { FC } from 'react';

// Components
import { UserMenu } from './UserMenu';

// Images
import logo from '../../../assets/images/logo.png';
import patrick from '../../../assets/images/patrick.jpg';
import banana from '../../../assets/images/banana.gif';
import checkmark from '../../../assets/images/check-mark.svg';

// Styles
import { TopbarContainer, Logo } from './styles';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            <Logo
                alt = 'patrick'
                src = { patrick }
            />
            <Logo
                alt = 'banana'
                src = { banana }
            />
            <Logo
                alt = 'check'
                src = { checkmark }
            />
            <h1>Boilerplate</h1>
            <UserMenu />
        </TopbarContainer>
    );
};
