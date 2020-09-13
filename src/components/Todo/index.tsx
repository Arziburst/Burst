import React, { FC } from 'react';

// Elements
import { Button } from '../../elements';

// Styles
import { Container } from './styles';

// Types
type PropTypes = {
    isColor: boolean
    text: string
    isCompleted: boolean
    updateHandler: Function
    deleteHandler: Function
}

export const Todo: FC<PropTypes> = ({
    isColor, text, isCompleted, updateHandler, deleteHandler,
}) => {
    return (
        <Container isColor = { isColor }>
            <p>{text}</p>
            <Button onClick = { () => void updateHandler() }>
                {isCompleted ? 'Done' : 'In progress'}
            </Button>
            <Button onClick = { () => void deleteHandler() }>
                Delete
            </Button>
        </Container>
    );
};
