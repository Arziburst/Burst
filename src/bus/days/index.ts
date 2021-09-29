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

// Types
// import { DaysState } from './types';

// Hooks
export const useDays = () => {
    const dispatch = useDispatch();
    const {
        togglersRedux: { isDaysFetching },
        setTogglerAction,
    } = useTogglersRedux();
    const { days, filter } = useSelector((state) => state);

    const filterHandler = () => {
        console.log(days);
        console.log(filter);

        const { isCloudy, isSunny, minTemp, maxTemp, isFiltered } = filter;

        // const daysFilterHandler = (callback: (days: DaysState) => boolean) => days.filter(callback);

        if (isCloudy && days.length !== 0 && isFiltered) {
            return days.filter(({ type }) => type === 'cloudy');
        }

        if (isSunny && days.length !== 0 && isFiltered) {
            return days.filter(({ type }) => type === 'sunny');
        }

        if (minTemp && maxTemp) {
            return days.filter(
                ({ temperature }) => temperature >= minTemp && temperature <= maxTemp,
            );
        }

        if (minTemp) {
            return days.filter(({ temperature }) => temperature >= minTemp);
        }

        if (maxTemp) {
            return days.filter(({ temperature }) => temperature <= maxTemp);
        }

        return days;
    };

    const fetchDaysAsync = async () => {
        setTogglerAction({
            type:  'isDaysFetching',
            value: true,
        });

        const result = await API.fetchDays();

        if (result !== null) {
            dispatch(daysActions.setDays(result));
        }

        setTogglerAction({
            type:  'isDaysFetching',
            value: false,
        });
    };

    useEffect(() => {
        fetchDaysAsync();
    }, []);

    console.log(days);

    return {
        days: filterHandler(),
        isDaysFetching,
    };
};
