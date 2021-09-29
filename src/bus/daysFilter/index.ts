// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import { filterActions } from './slice';

// Types
import { SetFilterState, CurrentDay } from './types';

// Hooks
export const useDaysFilter = () => {
    const dispatch = useDispatch();

    const  { isCloudy, isSunny, currentDay }  = useSelector(({ filter }) => filter);
    // const { filteredDays, isCloudy, isSunny } = useSelector(({ daysFilter }) => daysFilter);
    // console.log(days);
    // const fillDaysFilter = () => {
    //     dispatch(daysFilterActions.setDaysFilter(days));
    // };

    // useEffect(() => {
    //     fillDaysFilter();
    // }, []);

    return {
        isCloudy,
        isSunny,
        currentDay,
        setCurrentDay: (currentDay: CurrentDay) => void dispatch(filterActions.setCurrentDay(currentDay)),
        toggleOption:  (number?: number) => {
            void dispatch(filterActions.toggleOption(number))
        },
        setFilter:     (data: SetFilterState) => void dispatch(filterActions.setFilter(data)),
        // toggleSunny:  () => void dispatch(daysFilterActions.toggleSunnyOption()),
    };

    // const fetchDaysAsync = async () => {
    //     setTogglerAction({
    //         type:  'isDaysFetching',
    //         value: true,
    //     });

    //     const result = await API.fetchDays();

    //     if (result !== null) {
    //         dispatch(daysActions.setDays(result));
    //     }

    //     setTogglerAction({
    //         type:  'isDaysFetching',
    //         value: false,
    //     });
    // };

    // useEffect(() => {
    //     fetchDaysAsync();
    // }, []);

    // return {
    //     days,
    //     isDaysFetching,
    // };
};
