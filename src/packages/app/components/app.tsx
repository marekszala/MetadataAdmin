import * as React from "react";
import { hot } from "react-hot-loader";
import TopNavigationBar from "./topNavigation";
import { RiksTvAdminPortal } from "./../../state";
import { RiksTvApp } from "./../state";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { safeRender } from "./../../shared";
import { openRiksTVApp } from "./../actionCreators/navigationActionsCreator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import makeMainRoutes from './../routes';
import { MetadataAdminComponent } from "./../../metadataAdmin";
import { ChannelAdminComponent } from "./../../channelAdmin";
import "./app.scss";

type StateProps = {
    currentApp: RiksTvApp;
};
type ActionProps = {
    onNavigationMenuClicked: (RiksTvApp) => void;
};

const App = (props: StateProps & ActionProps): JSX.Element => {
    return (
        <div className="app">
            {makeMainRoutes()}
        </div>
    );
};

const mapStateToProps = (rootState: RiksTvAdminPortal): StateProps => {
    return {
        currentApp: rootState.appState.view.navigationState.currentRoute
    };
};

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
    return {
        onNavigationMenuClicked: openRiksTVApp(dispatch)
    };
}

declare let module: object;
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(safeRender(App, "RiksTvAdminPortal")));
