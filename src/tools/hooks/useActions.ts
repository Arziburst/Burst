import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Actions
// import { __entityName__Actions } from '../../bus/__entityName__/slice';

const allActions = {
    // spread ...__entityName__Actions,
};


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};
