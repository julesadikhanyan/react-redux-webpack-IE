import React from "react";
import {AppBar, Button, makeStyles, Toolbar} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.buttons}>
                    <Button variant="contained" color="secondary" onClick={() => history.push("/users")}>
                        Users
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => history.push("/posts")}>
                        Posts
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;