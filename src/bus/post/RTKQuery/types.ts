// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Post = Array<any>
export type PostState = Post | null

// Contracts
export type BaseContact<T = any> = CaseReducer<PostState, PayloadAction<T>>

