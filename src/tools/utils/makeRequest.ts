// Core
import { put, call } from 'redux-saga/effects';

// Redux
import { errorsActions } from '../../bus/client/errors';
import { TogglersKeys } from '../../bus/client/togglers';

// Action
import { togglerCreatorAction } from '../../bus/client/togglers';
import { IControlledError } from './controlledError';

type OptionsType<T> = {
    fetcher: (...args: any) => Promise<T>;
    togglerType?: TogglersKeys;
    succesAction?: (payload: T) => {
        type: string;
        payload: T;
    };
    errorAction?: Function;
    successSideEffect?: Function;
    errorSideEffect?: Function;
    isControlledMode?: boolean
};

export function* makeRequest<T>(options: OptionsType<T>) {
    const {
        fetcher, togglerType,
        succesAction, errorAction,
        successSideEffect, errorSideEffect,
        isControlledMode,
    } = options;

    try {
        // ------------- SUCCESS BLOCK START -------------
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: true,
            }));
        }

        const result: T = yield call(fetcher);

        if (succesAction) {
            yield put(succesAction(result));
        }

        if (successSideEffect) {
            yield successSideEffect();
        }

        return result;
        // ------------- SUCCESS BLOCK END -------------
    } catch (error) {
        // ------------- ERROR BLOCK START -------------
        if (errorSideEffect) {
            yield errorSideEffect();
        }

        if (errorAction) {
            yield put(errorAction());
        }

        if (isControlledMode) {
            const controlledError = error as IControlledError;
            yield put(errorsActions.setControlledError(controlledError));

            return controlledError;
        }

        return null;
        // ------------- ERROR BLOCK END -------------
    } finally {
        // ------------- FINALLY BLOCK START -------------
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: false,
            }));
        }
        // ------------- FINALLY BLOCK END -------------
    }
}

