import * as React from "react";
import { hot } from "react-hot-loader";
import { RiksTvApp } from "./../state";
import { safeRender, RoutePaths } from "./../../shared";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MetadataAdminComponent } from "./../../metadataAdmin";
import { ChannelAdminComponent } from "./../../channelAdmin";
import TopNavigationBar from "./topNavigation";
import Home from "./home";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./app.scss";

type StateProps = {
    auth: any;
};

const mapPathNameToLocation = (pathname: string): RiksTvApp => {
    if (pathname.indexOf(RoutePaths.MetadataAdminPath) > -1) {
        return "metadataAdmin";
    }
    else if (pathname.indexOf(RoutePaths.ChannelAdminPath) > -1) {
        return "channelAdmin";
    }

    return "";
}

const App = (props: StateProps & RouteComponentProps): JSX.Element => {
    const { isAuthenticated } = props.auth;
    const login = () => props.auth.login();
    const logOut = () => props.auth.logout();
    return (
        <div>
            <TopNavigationBar
                currentApp={mapPathNameToLocation(props.location.pathname)}
                isLoggedIn={isAuthenticated()}
                onLogin={login}
                onLogout={logOut} ></TopNavigationBar>

            <Route exact={true} path={RoutePaths.Home} render={_ => <Home />} />
            <Route exact={true} path={RoutePaths.ChannelAdminPath} render={_ => isAuthenticated() ? <ChannelAdminComponent /> : <Home />} />
            <Route exact={true} path={RoutePaths.MetadataAdminPath} render={_ => isAuthenticated() ? <MetadataAdminComponent /> : <Home />} />
        </div>
    );

};

declare let module: object;
export default hot(module)(withRouter(safeRender(App, "RiksTvAdminPortal")));
