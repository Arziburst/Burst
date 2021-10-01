// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Actions
import { filtersActions } from './slice';

// Types
import { SetFiltersParams } from './types';
import { Day } from '../../days/types';

// Hooks
export const useFilters = () => {
    const dispatch = useDispatch();

    const  {
        filtersParams,
        currentDay,
    }  = useSelector(({ filters }) => filters);

    const { isCloudy, isSunny, minTemp, maxTemp } = filtersParams;

    return {
        filters: {
            isCloudy,
            isSunny,
            minTemp,
            maxTemp,
        },
        currentDay,

        setCurrentDay: (currentDay: Day) => void dispatch(filtersActions.setCurrentDay(currentDay)),

        setFiltersParams: (filterState: SetFiltersParams) => void dispatch(
            filtersActions.setFiltersState(filterState),
        ),

        resetFiltersState: () => void dispatch(filtersActions.resetFiltersState()),
    };
};
