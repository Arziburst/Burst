// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
import { IControlledError } from '../../../tools/utils';
type ErrorsState = Array<IControlledError>
type ISetControlledError = PayloadAction<IControlledError>
type IUnsetControlledError = PayloadAction<{ errorId: string }>

const initialState: ErrorsState = [];

// Slice
export const errorsSlice = createSlice({
    name:     'errors',
    initialState,
    reducers: {
        setControlledError:   (state, action: ISetControlledError) => [ ...state, action.payload ],
        unsetControlledError: (state, action: IUnsetControlledError) => state.filter(
            ({ errorId }) => errorId !== action.payload.errorId,
        ),
    },
});

// Interfaces
export const errorsActions = errorsSlice.actions;
export default errorsSlice.reducer;

export const useErrors = () => {
    const dispatch = useDispatch();

    return {
        errors:                     useSelector(({ errors }) => errors),
        setControlledErrorAction:   (error: IControlledError) => void dispatch(errorsActions.setControlledError(error)),
        unsetControlledErrorAction: ({ errorId }: { errorId: string }) => void dispatch(
            errorsActions.unsetControlledError({ errorId }),
        ),
    };
};
