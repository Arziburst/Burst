// Core
import React from 'react';

// Components
import {
    ErrorBoundary,
    Filter,
    Head,
    CurrentWeather,
    Forecast,
} from '../../components';

// Redux
import { useDays } from '../../../bus/days';
import { useDaysFilter } from '../../../bus/daysFilter';

// Styles
import { Main } from './styles';

const WeatherWidget = () => {
    const { days, isDaysFetching } = useDays();
    const { currentDay } = useDaysFilter();

    const activeDay = currentDay.id ? days.find(({ id }) => id === currentDay.id) : days[ 0 ];
    console.log(activeDay);
    console.log('🚀 ~ file: index.tsx ~ line 21 ~ WeatherWidget ~ days', days);

    if (isDaysFetching) {
        return <div>Loading...</div>;
    }

    return (
        <Main>
            <Filter />
            <Head activeDay = { activeDay } />
            <CurrentWeather days = { days } />
            <Forecast days = { days } />
        </Main>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);
