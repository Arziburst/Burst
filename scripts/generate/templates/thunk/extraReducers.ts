// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Thunk requests
import {  fetch__entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';

// Thunk Cases
import * as Cases from './cases';

// Types
import { __entityName__(pascalCase)State } from '../types';

// Extra reducers
export default (builder: ActionReducerMapBuilder<__entityName__(pascalCase)State>) => {
    builder
        // fetch__entityName__(pascalCase) Cases
        .addCase(fetch__entityName__(pascalCase).pending, Cases.__entityName__(pascalCase)Pending)
        .addCase(fetch__entityName__(pascalCase).fulfilled, Cases.__entityName__(pascalCase)Fullfiled)
        .addCase(fetch__entityName__(pascalCase).rejected, Cases.__entityName__(pascalCase)Rejected);
};
