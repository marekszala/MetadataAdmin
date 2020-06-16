import * as React from "react";
import { render } from "react-dom";
import App from "./packages/app/components/app";
import { Provider } from 'react-redux';
import Store from "./packages/store";
const rootEl = document.getElementById("root");

render(
    <Provider store={Store}>
        <App />,
    </Provider>,
    rootEl,
);
