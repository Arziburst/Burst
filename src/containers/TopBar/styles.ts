// Core
import styled from 'styled-components';

export const TopbarContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.app.primary};
    background-size: cover;

    h1 {
        color: #fff;
        font-size: 24px;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.7);
        padding: 5px 10px;
        font-family: sans-serif;
    }
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    } 
`;
