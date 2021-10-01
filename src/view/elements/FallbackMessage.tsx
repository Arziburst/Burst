// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Type
type Proptypes = {
    children: string;
};

// Styles
const Styled = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 28px;
  color: #fff;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FallbackMessage: FC<Proptypes> = ({ children }) => {
    return <Styled>{children}</Styled>;
};
