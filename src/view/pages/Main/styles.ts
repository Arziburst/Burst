// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    /* font-family: Roboto; */
    /* font-family: Gemunu Libre; */
    font-family: Montserrat;
    width: 100%;
    background-color: ${({ theme }) => theme.second.containerBg};
`;
