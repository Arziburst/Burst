import React, { useState } from 'react';
import { Container, Button, Count } from './styled';

export const useLocaleStorage = (key: string, initialValue: number): [number, any] => {
    const [ count, setCount ] = useState(() => {
        const dataFromStorage: any = localStorage.getItem(key);
        try {
            return JSON.parse(dataFromStorage) || initialValue;
        } catch {
            return initialValue;
        }
    });

    const save = (value: number) => {
        setCount(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [ count, save ];
};

export const Counter = () => {
    const [ count, setCount ] = useLocaleStorage('count', 0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    return (
        <Container className = 'App'>
            <Button
                type = 'button'
                value = { count }
                onClick = { decrease }>-
            </Button>
            <Count>{count}</Count>
            <Button
                type = 'button'
                value = { count }
                onClick = { increase }>+
            </Button>
        </Container>
    );
};
