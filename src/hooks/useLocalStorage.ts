// Core
import { useState } from 'react';
import localStorage from 'store';

// Instruments
import { APP_NAME } from '../@init/constants';

export const useLocalStorage = <_, TValue>(key: string, innitialValue: TValue): [TValue, (value: TValue) => void] => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value: TValue | undefined = localStorage.get(`${APP_NAME}:${key}`);

            return typeof value !== 'undefined' ? value : innitialValue;
        } catch (error) {
            console.log(`local storage error by key: ${APP_NAME}:${key}. Npm package store error.`);

            return innitialValue;
        }
    });

    const setValue = (value: TValue) => {
        try {
            localStorage.set(`${APP_NAME}:${key}`, value);
            setStoredValue(value);
        } catch (error) {
            console.log(`local storage error by key: ${APP_NAME}:${key}. Dont forget about KEY and VALUE arguments.`);
        }
    };

    return [
        storedValue,
        setValue,
    ];
};
