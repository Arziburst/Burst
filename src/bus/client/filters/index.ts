// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Actions
import { filterActions } from './slice';

// Types
import { SetFilterData } from './types';
import { Day } from '../../days/types';

// Hooks
export const useFilter = () => {
    const dispatch = useDispatch();

    const { filterData, currentDay } = useSelector(({ filters }) => filters);

    const { isCloudy, isSunny, minTemp, maxTemp } = filterData;

    return {
        filterData: {
            isCloudy,
            isSunny,
            minTemp,
            maxTemp,
        },
        currentDay,

        setCurrentDay: (currentDay: Day) => void dispatch(filterActions.setCurrentDay(currentDay)),

        setFilterData: (filterState: SetFilterData) => void dispatch(filterActions.setFilterData(filterState)),

        resetFilterState: () => void dispatch(filterActions.resetFilterState()),
    };
};
