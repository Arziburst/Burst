// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type __entityName__(pascalCase) = Array<any>
export type __entityName__(pascalCase)State = __entityName__(pascalCase) | null

// Contracts
export type BaseContact<T = any> = CaseReducer<__entityName__(pascalCase)State, PayloadAction<T>>
