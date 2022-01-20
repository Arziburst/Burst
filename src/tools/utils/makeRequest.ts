// Core
import { Action } from '@reduxjs/toolkit';
import { put, call } from 'redux-saga/effects';

// Redux
import { TogglersKeys } from '../../bus/client/togglers';

// Action
import { togglerCreatorAction } from '../../bus/client/togglers';

// Tools
import { customFetch } from './customFetch';

// Types
export type FetchOptions = {
    fetch: () => ReturnType<typeof fetch>;
    successStatusCode?: number;
}

type OptionsType<SuccessData, ErrorData> = {
    fetchOptions: FetchOptions;
    callAction?: Action<any>;
    togglerType?: TogglersKeys;
    // -------------------------------------------------
    tryStart?: Function;
    succes?: (successData: SuccessData) => void;
    tryEnd?: (successData: SuccessData) => void;
    // -------------------------------------------------
    catchStart?: (errorData: ErrorData) => void;
    error?: (errorData: ErrorData) => void;
    catchEnd?: (errorData: ErrorData) => void;
    // -------------------------------------------------
    finallyStart?: Function;
    finallyEnd?: Function;
};

export function* makeRequest<SuccessData, ErrorData = {}>(options: OptionsType<SuccessData, ErrorData>) {
    const {
        fetchOptions,
        callAction,
        togglerType,
        tryStart, tryEnd,
        catchStart, catchEnd,
        finallyStart, finallyEnd,
        succes, error,
    } = options;

    try {
        // ------------- TRY BLOCK START -------------
        if (tryStart) {
            yield tryStart();
        }

        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: true,
            }));
        }

        const result: SuccessData = yield call(() => customFetch(fetchOptions));

        if (succes) {
            yield succes(result);
        }

        if (tryEnd) {
            yield tryEnd(result);
        }

        return result;
        // ------------- TRY BLOCK END -------------
    } catch (errorData: ErrorData | any) {
        // ------------- CATCH BLOCK START -------------
        if (catchStart) {
            yield catchStart(errorData);
        }

        if (error) {
            yield error(errorData);
        }

        if (callAction) {
            yield put(callAction);
        }

        if (catchEnd) {
            yield catchEnd(errorData);
        }

        return errorData;
        // ------------- CATCH BLOCK END -------------
    } finally {
        if (finallyStart) {
            yield finallyStart();
        }

        // ------------- FINALLY BLOCK START -------------
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: false,
            }));
        }

        if (finallyEnd) {
            yield finallyEnd();
        }
        // ------------- FINALLY BLOCK END -------------
    }
}

