// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Tools
import { useSelector } from '../../tools/hooks';

// Api
import * as API from './api';

// Actions
import { daysActions } from './slice';
import { filterActions } from '../client/filters/slice';

// Hooks
export const useDays = () => {
    const dispatch = useDispatch();

    const {
        togglersRedux: { isDaysFetching },
        setTogglerAction,
    } = useTogglersRedux();

    const { days, filters } = useSelector((state) => state);

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

    const ifCurrentDayExistInFilteredDaysHandler = (
        filteredDays: typeof days,
    ) => {
        return !filteredDays
            .map(({ id }) => id)
            .includes(filters.currentDay?.id ?? '');
    };

    const filterHandler = () => {
        const { isCloudy, isSunny, minTemp, maxTemp } = filters.filterData;

        const filteredDays = days.filter(
            ({ type, temperature }) => !(
                (isCloudy && type !== 'cloudy')
          || (isSunny && type !== 'sunny')
          || (minTemp && temperature < minTemp)
          || (maxTemp && temperature > maxTemp)
          || (maxTemp === 0 && true)
            ),
        );

        if (ifCurrentDayExistInFilteredDaysHandler(filteredDays)) {
            dispatch(filterActions.setCurrentDay(filteredDays[ 0 ]));
        }

        return filteredDays.length !== 0 ? filteredDays : [];
    };

    return {
        days: filterHandler(),
        isDaysFetching,
    };
};
