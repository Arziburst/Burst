// Core
import { lazy } from 'react';

export const WeatherWidget = lazy(() => import(/* webpackChunkName: "WeatherWidget" */ './WeatherWidget'));
