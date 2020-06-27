import { applyMiddleware, createStore } from 'redux';
import createRootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';

// Create a history of your choosing (we're using a browser history in this case)
const history: History = createBrowserHistory({});
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);
const middleware = applyMiddleware(thunk, logger, historyMiddleware);
const Store = createStore(createRootReducer(history), middleware);

export { history as history };
export default Store;