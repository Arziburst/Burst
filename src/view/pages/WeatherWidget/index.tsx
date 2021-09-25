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

// Styles
import { Main } from './styles';

const WeatherWidget = () => {
    const { days, isDaysFetching } = useDays();
    console.log('🚀 ~ file: index.tsx ~ line 21 ~ WeatherWidget ~ days', days);
    if (isDaysFetching) {
        return <div>Loading...</div>;
    }

    return (
        <Main>
            <Filter />
            <Head />
            <CurrentWeather />
            <Forecast />
        </Main>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);
