import styled from 'styled-components';

export const Container = styled.div<{ isColor: boolean }>`
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 33% 33% 33%;
    align-items: center;
    font-family: sans-serif;
    padding: 10px;
    background-color: ${({ isColor }) => isColor ? 'lightgray' : 'white'};

    p {
        font-size: 20px;
        padding-right: 10px;
    }
`;
