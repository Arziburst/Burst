// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Posts = Array<any>
export type PostsState = {
    status: string,
    posts: Array<Posts> | [],
    error: any
} | null

// Action types
export type ActionType = {[key: string]: any}

// Contracts
export type BaseContact<T = any> = CaseReducer<PostsState, ActionType & PayloadAction<T>>
