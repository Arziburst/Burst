// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

// Types
interface StyledTextareaProps {
    error?: string;
}

export interface TextareaProps extends
    StyledTextareaProps,
    DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    ref?: Ref<HTMLTextAreaElement>;
    withError?: boolean;
}

// Styles
const StyledTextarea = styled.textarea<StyledTextareaProps>`
    padding: 5px;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 200px;
    max-height: 300px;
    min-height: 100px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.input.primary};
    border: none;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    outline: none;
    font-family: sans-serif;
    overflow: auto;

    &::placeholder {
        color: gray;
    }

    &:disabled {
        color: lightgray;
        cursor: not-allowed;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ErrorMessage = styled.span`
    height: 16px;
    font-size: 14px;
    padding-left: 6px;
    padding-top: 2px;
    color: red;
`;

export const Textarea: FC<TextareaProps> = ({ withError, error, style, ...otherProps }) => {
    if (withError) {
        return (
            <Container style = { style }>
                <StyledTextarea
                    error = { error }
                    { ...otherProps }
                />
                <ErrorMessage>{error}</ErrorMessage>
            </Container>
        );
    }

    return (
        <StyledTextarea
            style = { style }
            { ...otherProps }
        />
    );
};
