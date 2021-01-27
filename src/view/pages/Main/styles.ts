// Core
import styled from 'styled-components';

// Styles
import { EntityContainer, EntityHeader } from '../styles';

export const Container = styled(EntityContainer)`
    background-color: ${({ theme }) => theme.second.containerBg};
`;

export const Header = styled(EntityHeader)`
    background-color: ${({ theme }) => theme.second.anotherSecondary};
    border-bottom: 1px solid #fff;
`;
