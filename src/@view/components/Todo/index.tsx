import React, { FC } from 'react';

// Elements
import { Button } from '../../elements';

// Styles
import { Container } from './styles';

// Types
import * as Types from '../../../@bus/todos/types';

type PropTypes = Types.Todo & {
    isColor: boolean
    updateHandler: Function
    deleteHandler: Function
}

// interface PropTypes extends Types.Todo {
//     isColor: boolean
//     updateHandler: Function
//     deleteHandler: Function
// }

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
