// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
    /* type props here */
}

// Styles
const Container = styled.div<PropTypes>`
    /* styles here */
`;

export const __elementName__(pascalCase): FC<PropTypes> = () => {
    return (
        <Container>
            Element: __elementName__(pascalCase)
        </Container>
    );
};
