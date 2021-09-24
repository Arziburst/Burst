// Core
import React from 'react';

// Components
import { ErrorBoundary, Filter, Head, CurrentWeather } from '../../components';

// Styles
import {
    Main,
    Forecast,
    CloudyDay,
    RainyDay,
    SunnyDay,
    DayText,
    DayNumber,
} from './styles';

const WeatherWidget = () => {
    return (
        <Main>
            <Filter/>
            <Head/>
            <CurrentWeather/>
            <Forecast>
                <CloudyDay selected>
                    <DayText>Пятница</DayText>
                    <DayNumber>17</DayNumber>
                </CloudyDay>
                <CloudyDay>
                    <DayText>Суббота</DayText>
                    <DayNumber>19</DayNumber>
                </CloudyDay>
                <CloudyDay>
                    <DayText>Понедельник</DayText>
                    <DayNumber>18</DayNumber>
                </CloudyDay>
                <CloudyDay>
                    <DayText>Вторник</DayText>
                    <DayNumber>21</DayNumber>
                </CloudyDay>
                <RainyDay>
                    <DayText>Среда</DayText>
                    <DayNumber>16</DayNumber>
                </RainyDay>
                <RainyDay>
                    <DayText>Четверг</DayText>
                    <DayNumber>19</DayNumber>
                </RainyDay>
                <SunnyDay>
                    <DayText>Пятница</DayText>
                    <DayNumber>26</DayNumber>
                </SunnyDay>
            </Forecast>
        </Main>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);
