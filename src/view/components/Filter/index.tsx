// Core
import React, { useState } from 'react';

// Redux
import { useDaysFilter } from '../../../bus/daysFilter';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import { StyledFilter, Checkbox, CustomInput, CustomInputLabel, CustomInputField, FilterBtn } from './styles';

const initialState = {
    minTemp: '',
    maxTemp: '',
};

export const Filter = () => {
    const [ isFiltered, toggleFilterState ] = useState(false);
    const [ filterForm, filterFormHandleChange, , resetFilterForm ] = useForm<typeof initialState>(initialState);
    console.log('🚀 ~ file: index.tsx ~ line 20 ~ Filter ~ filterForm', filterForm);
    const {  isCloudy, isSunny, toggleOption, setFilter  } = useDaysFilter();

    const filterHandleSubmit = () => {
        setFilter({ ...filterForm, isFiltered: true });
        toggleFilterState(false);
    };

    return (
        <StyledFilter>
            <Checkbox
                selected = { isCloudy }
                onClick = { () => toggleOption(0) }>Облачно
            </Checkbox>
            <Checkbox
                selected = { isSunny }
                onClick = { () => toggleOption(1)  }>Солнечно
            </Checkbox>
            <CustomInput>
                <CustomInputLabel htmlFor = 'min-temperature'>Минимальная температура</CustomInputLabel>
                <CustomInputField
                    id = 'min-temperature'
                    name = 'minTemp'
                    type = 'number'
                    value = { filterForm.minTemp }
                    onChange = { (event) => void filterFormHandleChange(event, true)  }
                />
            </CustomInput>
            <CustomInput>
                <CustomInputLabel htmlFor = 'min-temperature'>Максимальная температура</CustomInputLabel>
                <CustomInputField
                    id = 'max-temperature'
                    name = 'maxTemp'
                    type = 'number'
                    value = { filterForm.maxTemp }
                    onChange = { (event) => void filterFormHandleChange(event, true)  }
                />
            </CustomInput>
            <FilterBtn onClick = { filterHandleSubmit }>Отфильтровать</FilterBtn>
        </StyledFilter>
    );
};
