import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.buttons}>
                    <Button variant="contained" color="secondary" component={Link} to="/users">
                        Get Users
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="/posts">
                        Get Posts
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;