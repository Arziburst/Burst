// Core
import styled from 'styled-components';

export const Container = styled.div<{ isActive: boolean }>`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fff;
    overflow: hidden;

    justify-content: center;
    align-items: center;

    ${({ isActive, theme }) => isActive ? {
        cursor:       'pointer',
        'svg > path': {
            fill:       theme.first.secondary,
            transition: 'fill 0.5s',
        },
        '&:hover': {
            'svg > path': {
                fill: theme.first.hoverSecondary,
            },
        },
    } : {
        cursor:       'not-allowed',
        'svg > path': {
            fill: 'gray',
        },
    }}

`;
