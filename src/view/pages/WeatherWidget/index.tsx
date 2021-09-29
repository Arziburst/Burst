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

    const filteredDays = days.find(({ id }) => id === currentDay.id);

    const activeDay = filteredDays ? filteredDays : days[ 0 ];
    console.log('id текущего дня', currentDay.id);
    console.log('🚀 ~ file: index.tsx ~ line 21 ~ WeatherWidget ~ days', days);

    if (isDaysFetching) {
        return <div>Loading...</div>;
    }

    return (
        <Main>
            <Filter />
            <Head activeDay = { activeDay } />
            <CurrentWeather activeDay = { activeDay } />
            <Forecast days = { days } />
        </Main>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);
