// Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    position: relative;
    width: 100%;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 12px;
`;

export const Breadcrumbs = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Crumb = styled(Link)`
    
`;
