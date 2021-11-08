// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type __entityName__(pascalCase) = Array<any>
export type __entityName__(pascalCase)State = __entityName__(pascalCase) | null

// Contracts
type BaseContact<T> = CaseReducer<__entityName__(pascalCase)State, PayloadAction<T>>

export type Set__entityName__(pascalCase)Contract = BaseContact<__entityName__(pascalCase)>
