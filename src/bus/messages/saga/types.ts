// Types
export const FETCH_MESSAGES_ASYNC = 'FETCH_MESSAGES_ASYNC';
export type FetchMessagesActionAsync = {
    type: typeof FETCH_MESSAGES_ASYNC;
};
export type FetchMessagesContract = () => FetchMessagesActionAsync
