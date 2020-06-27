import * as React from "react";
import { render } from "react-dom";
import App from "./packages/app/components/app";
import { Provider } from 'react-redux';
import Store, { history } from "./packages/store";
const rootEl = document.getElementById("root");
import { ConnectedRouter } from 'connected-react-router'
render(
    <Provider store={Store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
            <App />
        </ConnectedRouter>
    </Provider>,
    rootEl
);
