// Core
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
    basename: process.env.BROWSER_HISTORY_BASENAME || '',
});
