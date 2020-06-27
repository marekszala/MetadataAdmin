import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { RiksTvApp } from "./../state";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

type TopNavigationBarProps = {
    currentApp: RiksTvApp;
    onNavigationMenuClicked: (newApp: RiksTvApp) => void;
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
};

const TopNavigationBar = (props: TopNavigationBarProps & RouteComponentProps): JSX.Element => {
    const classes = useStyles();
    const handleClick = (app: RiksTvApp): () => void => () => {
        // props.history.push("/" + app);
        props.onNavigationMenuClicked(app);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button
                            color="inherit"
                            variant={props.currentApp === "metadataAdmin" ? "outlined" : null}
                            onClick={handleClick("metadataAdmin")}>
                            Metadata Admin
                            </Button>
                        <Button
                            color="inherit"
                            variant={props.currentApp === "channelAdmin" ? "outlined" : null}
                            onClick={handleClick("channelAdmin")}>
                            Channel Admin
                            </Button>
                    </Typography>
                    {
                        props.isLoggedIn ?
                            <Button color="inherit">Login</Button>
                            :
                            <Button color="inherit">Logout</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(TopNavigationBar);