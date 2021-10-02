// Core
import React from 'react';

// Components
import {
    ErrorBoundary,
    Filter,
    Head,
    CurrentDay,
    Forecast,
} from '../../components';

// Elements
import { FallbackMessage, Spinner } from '../../elements';

// Redux
import { useDays } from '../../../bus/days';
import { useFilter } from '../../../bus/client/filters';

// Styles
import { Main } from './styles';

const WeatherWidget = () => {
    const { days, isDaysFetching } = useDays();
    const { currentDay } = useFilter();

    if (isDaysFetching) {
        return <Spinner />;
    }

    return (
        <Main>
            <Filter />
            {days.length === 0 ? (
                <FallbackMessage>
                    По заданным критериям нет доступных дней!
                </FallbackMessage>
            ) : (
                <section>
                    <Head currentDay = { currentDay } />
                    <CurrentDay currentDay = { currentDay } />
                    <Forecast days = { days } />
                </section>
            )}
        </Main>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);
