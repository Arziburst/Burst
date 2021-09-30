// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Api
import * as API from './api';

// Actions
import { daysActions } from './slice';
import { filterActions } from '../daysFilter/slice';

// Types
import { DayType } from './types';

// Hooks
export const useDays = () => {
    const dispatch = useDispatch();
    const {
        togglersRedux: { isDaysFetching },
        setTogglerAction,
    } = useTogglersRedux();
    const { days, filter } = useSelector((state) => state);

    const fetchDaysAsync = async () => {
        setTogglerAction({
            type:  'isDaysFetching',
            value: true,
        });

        const result = await API.fetchDays();

        if (result !== null) {
            dispatch(daysActions.setDays(result));
            dispatch(filterActions.setCurrentDay(result[ 0 ]));
        }

        setTogglerAction({
            type:  'isDaysFetching',
            value: false,
        });
    };

    useEffect(() => {
        fetchDaysAsync();
    }, []);

    const filteredDaysHandler = (type: DayType) => days.filter((day) => day.type === type);

    const ifCurrentDayExistInFilteredDaysHandler = (filteredDays: typeof days) => {
        return !filteredDays.map(({ id }) => id).includes(filter.currentDay?.id ?? '');
    };

    const filterHandler = () => {
        const { isCloudy, isSunny, minTemp, maxTemp } = filter;

        if (isCloudy) {
            const filteredDays = filteredDaysHandler('cloudy');

            if (ifCurrentDayExistInFilteredDaysHandler(filteredDays)) {
                dispatch(filterActions.setCurrentDay(filteredDays[ 0 ]));
            }

            return filteredDays;
        }

        if (isSunny) {
            const filteredDays = days.filter(({ type }) => type === 'sunny');
            console.log('Сейчас произойдет setCurrentDay');

            if (ifCurrentDayExistInFilteredDaysHandler(filteredDays)) {
                dispatch(filterActions.setCurrentDay(filteredDays[ 0 ]));
            }

            return  filteredDays;
        }

        // if (minTemp && maxTemp) {
        //     const filteredDays = days.filter(
        //         ({ temperature }) => temperature >= minTemp && temperature <= maxTemp,
        //     );

        //     dispatch(filterActions.setCurrentDay(filteredDays[ 0 ]));

        //     return  filteredDays;
        // }

        // if (minTemp) {
        //     const filteredDays = days.filter(({ temperature }) => temperature >= minTemp);

        //     dispatch(filterActions.setCurrentDay(filteredDays[ 0 ]));

        //     return  filteredDays;
        // }

        // if (maxTemp) {
        //     const filteredDays = days.filter(({ temperature }) => temperature <= maxTemp);

        //     dispatch(filterActions.setCurrentDay(filteredDays[ 0 ]));

        //     return  filteredDays;
        // }

        return days;
    };

    return {
        days: filterHandler(),
        isDaysFetching,
    };
};
