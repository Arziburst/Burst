// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const WeatherWidget = lazy(() => import(/* webpackChunkName: "WeatherWidget" */ './WeatherWidget'));
