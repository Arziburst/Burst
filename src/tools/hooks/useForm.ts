/* eslint-disable no-nested-ternary */

// Core
import { useState, ChangeEvent } from 'react';

type HandleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  | null,
    transformer?: (value: string | number) => string | number
) => void;

type UseForm = <T>(
    initialValue: T,
) => [T, HandleChange, (newInitialValue: T) => void, Function]

export const useForm: UseForm = (initialValue) => {
    const [ form, setForm ] = useState(initialValue);

    const handleChange: HandleChange = (event, transformer) => {
        if (event === null) {
            console.warn('Event do not exist.');

            return;
        }

        let value: string | number = event.target.value;

        if (event.target.type === 'number' && value !== '') {
            value = parseInt(value, 10);
        }

        if (transformer) {
            value = transformer(value);
        }

        return void setForm({ ...form, [ event.target.name ]: value });
    };

    const resetForm = () => void setForm(initialValue);

    const setInitialForm = (newInitialValue: typeof initialValue) => void setForm(newInitialValue);

    return [ form, handleChange, resetForm, setInitialForm ];
};

type ArrayOfStringsForm = (initialValues: Array<string>) => [
    Array<string>,
    (newString: string) => void,
    (newInnitialValues: Array<string>) => void
];

export const useArrayOfStringsForm: ArrayOfStringsForm = (initialValues)  => {
    const [ arrayOfStrings, setArrayOfStrings ] = useState<Array<string>>(initialValues);

    const arrayOfStringsHandle = (newString: string) => {
        if (arrayOfStrings.includes(newString)) {
            setArrayOfStrings((prevState) => prevState.filter((string) => string !== newString));
        } else {
            setArrayOfStrings((prevState) => [ ...prevState, newString ]);
        }
    };

    const setNewInnitialValues = (newInnitialValues: Array<string>) => {
        setArrayOfStrings(newInnitialValues);
    };

    return [ arrayOfStrings, arrayOfStringsHandle, setNewInnitialValues ];
};
