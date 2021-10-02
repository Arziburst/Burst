// Core
import React, { useState } from 'react';

// Redux
import { useFilter } from '../../../bus/client/filters';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import * as S from './styles';

// Types & initialState
import * as T from './types';
import { DayType } from '../../../bus/days/types';

export const Filter = () => {
    const { filterData, setFilterData, resetFilterState } = useFilter();

    const [ filterForm, filterFormHandleChange, , resetFilterForm ]
    = useForm<T.TemperatureInitialState>(T.temperatureInitialState);

    const [ dayTypeState, setDayTypeState ] = useState<T.DayTypeInitialState>(
        T.dayTypeInitialState,
    );

    const setDayTypeStateHandler = (dayType: DayType) => void setDayTypeState(
        dayType === 'cloudy'
            ? { isCloudy: true, isSunny: null }
            : { isCloudy: null, isSunny: true },
    );

    const isFormfilledHandler = (
        form: T.TemperatureInitialState & T.DayTypeInitialState,
    ) => Object.entries(form).some(([ , value ]) => value !== null);

    const isReduxFormfilled = isFormfilledHandler(filterData);

    const isComponentFormfilled = isFormfilledHandler({
        ...filterForm,
        ...dayTypeState,
    });

    const filterHandleSubmit = () => {
        if (isReduxFormfilled) {
            resetFilterState();
            resetFilterForm();
            setDayTypeState(T.dayTypeInitialState);

            return;
        }

        setFilterData({ ...filterForm, ...dayTypeState });
    };

    return (
        <S.StyledFilter>
            <S.Checkbox
                filled = { isReduxFormfilled }
                selected = { dayTypeState.isCloudy ?? false }
                onClick = { () => void setDayTypeStateHandler('cloudy') }>
                Облачно
            </S.Checkbox>
            <S.Checkbox
                filled = { isReduxFormfilled }
                selected = { dayTypeState.isSunny ?? false }
                onClick = { () => void setDayTypeStateHandler('sunny') }>
                Солнечно
            </S.Checkbox>
            <S.CustomInput>
                <S.CustomInputLabel htmlFor = 'min-temperature'>
                    Минимальная температура
                </S.CustomInputLabel>
                <S.CustomInputField
                    disabled = { isReduxFormfilled }
                    id = 'min-temperature'
                    name = 'minTemp'
                    type = 'number'
                    value = { filterForm.minTemp ?? '' }
                    onChange = { (event) => void filterFormHandleChange(event, true) }
                />
            </S.CustomInput>
            <S.CustomInput>
                <S.CustomInputLabel htmlFor = 'max-temperature'>
                    Максимальная температура
                </S.CustomInputLabel>
                <S.CustomInputField
                    disabled = { isReduxFormfilled }
                    id = 'max-temperature'
                    name = 'maxTemp'
                    type = 'number'
                    value = { filterForm.maxTemp ?? '' }
                    onChange = { (event) => void filterFormHandleChange(event, true) }
                />
            </S.CustomInput>
            <S.FilterBtn
                disabled = { !isComponentFormfilled }
                onClick = { filterHandleSubmit }>
                {isReduxFormfilled ? 'Сбросить' : 'Отфильтровать'}
            </S.FilterBtn>
        </S.StyledFilter>
    );
};
