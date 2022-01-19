// Core
import React, { FC } from 'react';
import { useParams } from 'react-router';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Item: FC<PropTypes> = () => {
    const { id } = useParams<'id'>();

    return (
        <S.Container>
            <p>Page Item: { id }</p>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Item />
    </ErrorBoundary>
);
