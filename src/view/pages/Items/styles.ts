// Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type ContainerPropTypes = {
    padding: number
}

export const Container = styled.div<ContainerPropTypes>(({ padding }) => ({
    padding: `${padding}px`,
}));

export const NavButton = styled(NavLink)(() => ({

}));
