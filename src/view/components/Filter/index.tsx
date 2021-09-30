// Core
import React, { useState } from 'react';

// Redux
import { useDaysFilter } from '../../../bus/daysFilter';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import * as S from './styles';

// Types & initialState
import * as T from './types';
import { DayType } from '../../../bus/days/types';

export const Filter = () => {
    const {
        filter,
        setFilterState,
        resetFilterState,
    } = useDaysFilter();

    const [
        filterForm,
        filterFormHandleChange, ,
        resetFilterForm,
    ] = useForm<T.TemperatureInitialState>(T.temperatureInitialState);

    const [ dayTypeState, setDayTypeState ] = useState<T.DayTypeInitialState>(T.dayTypeInitialState);

    const setDayTypeStateHandler = (dayType: DayType) => void setDayTypeState(
        dayType === 'cloudy'
            ? { ...dayTypeState, isCloudy: true }
            : { ...dayTypeState, isSunny: true },
    );
    const isFormfilledHandler = (
        form: T.TemperatureInitialState & T.DayTypeInitialState,
    ) => Object.entries(form).some(([ , value ]) => value !== null);

    const isReduxFormfilled = isFormfilledHandler(filter);
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

        setFilterState({ ...filterForm, ...dayTypeState });
    };

    return (
        <S.StyledFilter>
            <S.Checkbox
                disable = { isReduxFormfilled }
                selected = { dayTypeState.isCloudy ?? false }
                style = { isReduxFormfilled ? { pointerEvents: 'none' } : {} }
                onClick = { () => void setDayTypeStateHandler('cloudy') }>Облачно
            </S.Checkbox>
            <S.Checkbox
                disable = { isReduxFormfilled }
                selected = { dayTypeState.isSunny ?? false }
                onClick = { () => void setDayTypeStateHandler('sunny') }>Солнечно
            </S.Checkbox>
            <S.CustomInput>
                <S.CustomInputLabel htmlFor = 'min-temperature'>Минимальная температура</S.CustomInputLabel>
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
                <S.CustomInputLabel htmlFor = 'min-temperature'>Максимальная температура</S.CustomInputLabel>
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
                { isReduxFormfilled ? 'Сбросить' : 'Отфильтровать'}
            </S.FilterBtn>
        </S.StyledFilter>
    );
};
