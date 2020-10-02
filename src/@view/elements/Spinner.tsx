// Core
import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface SpinnerProps {
    size?: SizeProp
    absolute?: boolean
}

const Container = styled.div<{ isActive: boolean, absolute: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    cursor: not-allowed;

    ${({ absolute }) => absolute
        ? {
            position: 'absolute',
            top:      0,
            bottom:   0,
            left:     0,
            right:    0,
            zIndex:   1,
        }
        : {
            width:  '100%',
            height: '100%',
        }}


    opacity: 0;
    ${({ isActive }) => isActive && { opacity: 1 }};
    transition: opacity 1s;
`;

let timerId: number | undefined = void 0;

export const Spinner: FC<SpinnerProps> = ({ size = '5x', absolute = false }) => {
    const [ isActive, setIsActive ] = useState(false);


    useEffect(() => {
        timerId = setTimeout(() => void setIsActive(true), 500);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <Container
            absolute = { absolute }
            isActive = { isActive }>
            <FontAwesomeIcon
                spin
                color = '#faa307'
                icon = 'cog'
                size = { size }
                title = 'Loading...'
            />
        </Container>
    );
};

