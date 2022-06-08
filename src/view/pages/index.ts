// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Lesson1 = lazy(() => import(/* webpackChunkName: "Lesson1" */ './Lesson1'));
