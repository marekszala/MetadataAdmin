import * as React from "react";
import { render } from "react-dom";
import App from "./packages/app/components/app";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './packages/reducers/rootReducer';

const rootEl = document.getElementById("root");

const store = createStore(RootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />,
    </Provider>,
    rootEl,
);
