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
    const [ isResetFilter, toggleResetFilterState ] = useState(false);
    const [ filterForm, filterFormHandleChange, , resetFilterForm ] = useForm<typeof initialState>(initialState);
    console.log('🚀 ~ file: index.tsx ~ line 20 ~ Filter ~ filterForm', filterForm);
    const {  isCloudy, isSunny, toggleOption, setFilter  } = useDaysFilter();

    const filterHandleSubmit = () => {
        if (isResetFilter) {
            toggleFilterState(false);
            toggleResetFilterState(false);
            resetFilterForm();
            toggleOption();

            return;
        }

        toggleFilterState(true);
        toggleResetFilterState(true);
        setFilter({ ...filterForm, isFiltered: true });
    };

    return (
        <StyledFilter>
            <Checkbox
                disable = { isResetFilter }
                selected = { isCloudy }
                style = { isResetFilter ? { pointerEvents: 'none' } : {} }
                onClick = { () => {
                    toggleFilterState(true);
                    toggleOption(0);
                } }>Облачно
            </Checkbox>
            <Checkbox
                disable = { isResetFilter }
                selected = { isSunny }
                onClick = { () => {
                    toggleFilterState(true);
                    toggleOption(1);
                }  }>Солнечно
            </Checkbox>
            <CustomInput>
                <CustomInputLabel htmlFor = 'min-temperature'>Минимальная температура</CustomInputLabel>
                <CustomInputField
                    disabled = { isResetFilter }
                    id = 'min-temperature'
                    name = 'minTemp'
                    type = 'number'
                    value = { filterForm.minTemp }
                    onChange = { (event) => {
                        toggleFilterState(filterForm.minTemp !== '');
                        void filterFormHandleChange(event, true);
                    }  }
                />
            </CustomInput>
            <CustomInput>
                <CustomInputLabel htmlFor = 'min-temperature'>Максимальная температура</CustomInputLabel>
                <CustomInputField
                    disabled = { isResetFilter }
                    id = 'max-temperature'
                    name = 'maxTemp'
                    type = 'number'
                    value = { filterForm.maxTemp }
                    onChange = { (event) => {
                        toggleFilterState(filterForm.maxTemp !== '');
                        filterFormHandleChange(event, true);
                    }  }
                />
            </CustomInput>
            <FilterBtn
                disabled = { !isFiltered }
                onClick = { filterHandleSubmit }>{isResetFilter ? 'Сбросить' : 'Отфильтровать'}
            </FilterBtn>
        </StyledFilter>
    );
};
