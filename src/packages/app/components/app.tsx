import * as React from "react";
import { hot } from "react-hot-loader";

import { RiksTvAdminPortal } from "./../../state";
import { RiksTvApp } from "./../state";
import { safeRender } from "./../../shared";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MetadataAdminComponent } from "./../../metadataAdmin";
import { ChannelAdminComponent } from "./../../channelAdmin";
import TopNavigationBar from "./topNavigation";
import Home from "./home";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import "./app.scss";

type StateProps = {
    currentApp: RiksTvApp;
    auth: any;
};

const App = (props: StateProps & RouteComponentProps): JSX.Element => {
    const { isAuthenticated } = props.auth;
    const login = () => props.auth.login();
    const logOut = () => props.auth.logout();
    return (
        <div>
            <TopNavigationBar
                currentApp={props.currentApp}
                isLoggedIn={isAuthenticated()}
                onLogin={login}
                onLogout={logOut} ></TopNavigationBar>

            <Route exact={true} path="/home" render={_ => <Home />} />
            <Route exact={true} path="/channelAdmin" render={_ => isAuthenticated() ? <ChannelAdminComponent /> : <Home />} />
            <Route exact={true} path="/metadataAdmin" render={_ => isAuthenticated() ? <MetadataAdminComponent /> : <Home />} />
        </div>
    );

};

declare let module: object;
export default hot(module)(withRouter(safeRender(App, "RiksTvAdminPortal")));
