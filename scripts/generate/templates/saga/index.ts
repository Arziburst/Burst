// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetch__entityName__(pascalCase)Action, watchFetch__entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';

export const use__entityName__(pascalCase)Saga = () => {
    const dispatch = useDispatch();

    return {
        fetch__entityName__(pascalCase): () => void dispatch(fetch__entityName__(pascalCase)Action(1)),
    };
};

export function* watch__entityName__(pascalCase)(): SagaIterator {
    yield all([ call(watchFetch__entityName__(pascalCase)) ]);
}
