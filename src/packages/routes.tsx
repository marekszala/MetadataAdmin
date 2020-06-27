import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Callback from './auth/callback';
import App from './app/components/app';
import Auth from './auth/auth';

const auth = new Auth();

const handleAuthentication = (prop: any) => {
    if (/access_token|id_token|error/.test(prop.location.hash)) {
        auth.handleAuthentication();
    }
};

const makeMainRoutes = () => (
    <Switch>
        <Route path="/" exact={true} render={props => !auth.isAuthenticated() ?
            <Redirect to="/home" />
            : <App auth={auth} {...props} />}
        />
        <Route
            path="/callback"
            render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
            }}
        />

        <Route exact={false} path="/" render={props => <App auth={auth}  {...props} />} />

    </Switch>
);

export default makeMainRoutes;