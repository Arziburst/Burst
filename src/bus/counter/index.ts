// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';


// Interfaces
import { counterActions } from './slice';

// Hooks
export const useCounter = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    return {
        counterState:      value,
        increment:         () => void dispatch(counterActions.increment()),
        decrement:         () => void dispatch(counterActions.decrement()),
        incrementByAmount: (payload: number) => void dispatch(counterActions.incrementByAmount(payload)),
    };
};
