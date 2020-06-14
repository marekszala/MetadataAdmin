import * as React from "react";
import { hot } from "react-hot-loader";
import TopNavigationBar from "./topNavigation";

import "./app.scss";

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="app">
                <TopNavigationBar />
                <h1>Hello World</h1>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
