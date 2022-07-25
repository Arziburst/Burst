// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type __entityName__(pascalCase) = Array<any>
export type __entityName__(pascalCase)State = {
    status: string,
    __entityName__: Array<__entityName__(pascalCase)> | [],
    error: any
} | null

// Action types
export type ActionType = {[key: string]: any}

// Contracts
export type BaseContact<T = any> = CaseReducer<__entityName__(pascalCase)State, PayloadAction<T>>
