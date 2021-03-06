import React, {useState} from "react";
import {AppBar, Button, makeStyles, TextField, Toolbar} from "@material-ui/core";
import {useHistory, useLocation} from "react-router-dom";
import {blue} from "@material-ui/core/colors";
import {REGEX_ACCESS_TOKEN} from "../../constants";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: blue[50],
        boxShadow: "none",
        padding: 0,
        height: 70
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "70vw",
        margin: "auto"
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    token: {
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: "center",
        display: "flex"
    },
    field: {
        width: 300
    },
}));

const Header = (props) => {
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory();
    const [token, setToken] = useState("");
    const matches = useMediaQuery('(min-width:1270px)');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setToken(token);
        setToken("");
    };

    return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.buttons}>
                        <Button
                            disabled={location.pathname === "/users"}
                            onClick={() => history.push("/users")}>Users</Button>
                        <Button
                            disabled={location.pathname === "/posts"}
                            onClick={() => history.push("/posts")}>Posts</Button>
                    </div>
                    {
                        props.token ?
                            <div className={classes.token}>
                                {
                                    matches === true &&
                                    <Button disabled>{props.token}</Button>
                                }
                                <Button onClick={() => props.deleteToken()}>Change Token</Button>
                            </div> :
                            <form className={classes.token} onSubmit={handleSubmit}>
                                <TextField
                                className={classes.field}
                                label="Access-Token"
                                variant="outlined"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                            />
                            <Button type="submit" disabled={!(REGEX_ACCESS_TOKEN.test(token))}>Save</Button>
                        </form>
                    }
                </Toolbar>
            </AppBar>
    )
}

export default Header;