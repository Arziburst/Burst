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

// Hooks
export const useDays = () => {
    const dispatch = useDispatch();
    const {
        togglersRedux: { isDaysFetching },
        setTogglerAction,
    } = useTogglersRedux();
    const days = useSelector(({ days }) => days);

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

    return {
        days,
        isDaysFetching,
    };
};
