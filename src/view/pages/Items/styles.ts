// Core
import styled, { CSSProperties } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ContainerPropTypes {
    addStyle: CSSProperties,
}

export const Container = styled.div<ContainerPropTypes>(({ addStyle }) => ({
    ...addStyle,
}));

export const NavButton = styled(NavLink)(() => ({
    display:        'block',
    textDecoration: 'none',
}));
