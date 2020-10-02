// Core
import { put, call } from 'redux-saga/effects';

// Types
import { TogglersKeys } from '../@bus/client';

// Action
import { togglerCreatorAction } from '../@bus/client';

type OptionsType<T> = {
    fetcher: (...args: any) => Promise<T>;
    togglerType?: TogglersKeys;
    fill?: (payload: T) => {
        type: string;
        payload: T;
    };
    successSideEffect?: Function;
};

export function* makeRequest<T>(options: OptionsType<T>) {
    const { fetcher, togglerType, fill, successSideEffect } = options;

    try {
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: true,
            }));
        }

        const result = yield call(fetcher);

        if (fill) {
            yield put(fill(result));
        }

        if (successSideEffect) {
            yield put(successSideEffect());
        }

        return result;
    } catch (error) {
        console.log('error', error);

        return null;
    } finally {
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: false,
            }));
        }
    }
}

