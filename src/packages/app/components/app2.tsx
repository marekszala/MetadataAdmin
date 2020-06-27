import * as React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Profile from './profile';
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
                <Navbar>
                    <Navbar.Brand>

                    </Navbar.Brand>
                    <Link to={`/home`}>
                        <Button className="btn-margin" variant="primary"> Home</Button>
                    </Link>
                    {!isAuthenticated() &&
                        <Button className="btn-margin" onClick={this.login}> Log In</Button>}
                    {isAuthenticated() &&
                        <Link to={`/profile`}>
                            <Button className="btn-margin" > Profile</Button>
                        </Link>
                    }
                    {isAuthenticated() &&
                        <Button
                            variant="primary"
                            className="btn-margin"
                            onClick={this.renewToken}
                        >
                            Renew Token
                        </Button>
                    }
                    {isAuthenticated() &&
                        <Button
                            variant="primary"
                            className="btn-margin"
                            onClick={this.logOut}
                        >
                            Log Out
                        </Button>
                    }
                </Navbar>
                <Route exact={true} path="/home" render={props => <Home auth={this.props.auth} {...this.props} />} />
                <Route exact={true} path="/profile" render={props => <Profile auth={this.props.auth} {...this.props} />} />
            </div>
        );
    }
}

export default App;