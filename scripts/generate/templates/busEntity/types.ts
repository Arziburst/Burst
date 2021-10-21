// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Entity = {
    _id: string
};

export type __entityName__(pascalCase)State = Array<Entity>

// Contracts
export type Set__entityName__(pascalCase)Contract = CaseReducer<__entityName__(pascalCase)State, PayloadAction<__entityName__(pascalCase)State>>
