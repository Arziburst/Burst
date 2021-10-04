// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Message = {
    _id: string
    text: string
};
export type MessagesState = Array<Message>

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<MessagesState>>
