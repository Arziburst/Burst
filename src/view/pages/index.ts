// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Items = lazy(() => import(/* webpackChunkName: "Items" */ './Items'));
export const Item = lazy(() => import(/* webpackChunkName: "Item" */ './Item'));
