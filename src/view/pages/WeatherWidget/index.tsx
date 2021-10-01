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
import { useFilters } from '../../../bus/client/filters';

// Styles
import { Main } from './styles';

const WeatherWidget = () => {
    const { days, isDaysFetching } = useDays();
    const { currentDay } = useFilters();

    const filteredDays = days.find(({ id }) => id === currentDay?.id);

    const activeDay = filteredDays ? filteredDays : days[ 0 ];

    if (isDaysFetching) {
        return <div>Loading...</div>;
    }

    const fallbackTextJSX = (
        <p style = {{ fontFamily: 'Roboto,sans-serif',
            fontWeight: 'normal',
            fontSize:   '28px',
            color:      '#fff',
            position:   'absolute',
            bottom:     '50%',
            left:       '50%',
            transform:  'translate(-50%,-50%)' }}>По заданным критериям нет доступных дней!
        </p>
    );
    const weatherInfoJSX = (
        <section>
            <Head activeDay = { activeDay } />
            <CurrentWeather activeDay = { activeDay } />
            <Forecast days = { days } />
        </section>
    );

    return (
        <Main>
            <Filter />
            {days.length === 0 ? fallbackTextJSX
                : weatherInfoJSX}
        </Main>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);
