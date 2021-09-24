// Core
import React from 'react';

// Styles
import { StyledFilter, Checkbox, CustomInput, CustomInputLabel, CustomInputField, FilterBtn } from './styles';

export const Filter = () => {
    return (
        <StyledFilter>
            <Checkbox>Облачно</Checkbox>
            <Checkbox selected>Солнечно</Checkbox>
            <CustomInput>
                <CustomInputLabel htmlFor = 'min-temperature'>Минимальная температура</CustomInputLabel>
                <CustomInputField
                    id = 'min-temperature'
                    type = 'text'
                />
            </CustomInput>
            <CustomInput>
                <CustomInputLabel htmlFor = 'min-temperature'>Максимальная температура</CustomInputLabel>
                <CustomInputField
                    id = 'max-temperature'
                    type = 'text'
                />
            </CustomInput>
            <FilterBtn>Отфильтровать</FilterBtn>
        </StyledFilter>
    );
};
