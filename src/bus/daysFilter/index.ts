// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import { filterActions } from './slice';

// Types
import { SetFilterState } from './types';
import { Day } from '../days/types';

// Hooks
export const useDaysFilter = () => {
    const dispatch = useDispatch();

    const  {
        isCloudy, isSunny, minTemp, maxTemp,
        currentDay,
    }  = useSelector(({ filter }) => filter);

    return {
        filter: {
            isCloudy,
            isSunny,
            minTemp,
            maxTemp,
        },
        currentDay,

        setCurrentDay: (currentDay: Day) => void dispatch(filterActions.setCurrentDay(currentDay)),

        setFilterState: (filterState: SetFilterState) => void dispatch(
            filterActions.setFilterState(filterState),
        ),

        resetFilterState: () => void dispatch(filterActions.resetFilterState()),
    };
};
