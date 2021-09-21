// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Redux
import { useCounter } from '../../../bus/counter';
import { useMessages } from '../../../bus/messages';

// Elements
import { Button } from '../../elements';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const [ amount, setAmount ] = useState<number>(0);
    const { counterState, increment, decrement, incrementByAmount } = useCounter();
    const { messages, loading } = useMessages();

    console.log('🚀', messages);
    console.log('🚀', loading);

    return (
        <Container>
            counterState: {counterState}
            <Button onClick = { () => void increment() }>+</Button>
            <Button onClick = { () => void decrement() }>-</Button>
            <input
                value = { amount }
                onChange = { (event) => void setAmount(parseInt(event.target.value, 10)) }
            />
            <Button onClick = { () => void incrementByAmount(amount) }>incrementByAmount</Button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
