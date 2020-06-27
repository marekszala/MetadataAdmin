import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import TopNavigationBar from "./topNavigation";
import MetadataAdmin from "../../metadataAdmin/components/metadataAdmin"
import ChannelAdmin from "../../channelAdmin/components/channelAdmin"

class App extends React.Component<any> {
    componentDidMount() { }

    login = () => {
        this.props.auth.login();
    }
    renewToken = () => {
        this.props.auth.renewToken();
    }
    logOut = () => {
        this.props.auth.logout();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <TopNavigationBar currentApp={this.props.currentApp} isLoggedIn={isAuthenticated()} onLogin={this.login} onLogout={this.logOut} onNavigationMenuClicked={this.props.onNavigationMenuClicked}></TopNavigationBar>

                <Route exact={true} path="/home" render={props => <Home />} />
                <Route exact={true} path="/channelAdmin" render={props => isAuthenticated() ? <ChannelAdmin /> : <Home />} />
                <Route exact={true} path="/metadataAdmin" render={props => isAuthenticated() ? <MetadataAdmin /> : <Home />} />
            </div>
        );
    }
}

export default App;