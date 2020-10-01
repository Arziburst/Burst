// Core
import { Reducer } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../hooks';

const initialState = {
    isOnline:        navigator.onLine,
    isTodosFetching: true,
};

type TogglersState = typeof initialState;
export type TogglersKeys = keyof TogglersState;

export const SET_TOGGLER_STATE = 'SET_TOGGLER_STATE';
type TogglerCreatorAction = {
    type: typeof SET_TOGGLER_STATE;
    payload: {
        type: TogglersKeys;
        value: boolean;
    }
};

export const RESET_TOGGLERS_TO_INITIAL = 'RESET_TOGGLERS_TO_INITIAL';
export type ResetTogglersToInitialAction = {
    type: typeof RESET_TOGGLERS_TO_INITIAL
};

type TogglersActions =
    | TogglerCreatorAction
    | ResetTogglersToInitialAction

export const togglersReducer: Reducer<TogglersState, TogglersActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOGGLER_STATE:
            return { ...state, [ action.payload.type ]: action.payload.value };

        case RESET_TOGGLERS_TO_INITIAL:
            return {
                isOnline:        navigator.onLine,
                isTodosFetching: false,
            };

        default: return state;
    }
};

type Options = {
    type: TogglersKeys
    value: boolean
};

export const togglerCreatorAction = ({ type, value }: Options): TogglersActions  => ({
    type:    SET_TOGGLER_STATE,
    payload: {
        type,
        value,
    },
});

const resetTogglersToInitialAction = (): TogglersActions  => ({
    type: RESET_TOGGLERS_TO_INITIAL,
});

export const useTogglersRedux = () => {
    const dispatch = useDispatch();

    return {
        togglersRedux:          useSelector<TogglersState>(({ togglers }) => togglers),
        setTogglerAction:       (options: Options) => void dispatch(togglerCreatorAction(options)),
        resetTogglersToInitial: () => void dispatch(resetTogglersToInitialAction()),
    };
};

