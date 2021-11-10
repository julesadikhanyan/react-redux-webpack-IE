import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
            margin: theme.spacing(1),
        }
}));

const BackButton = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Button variant="contained" color="secondary" className={classes.button} onClick={() => history.goBack()}>Назад</Button>
    )
}

export default BackButton;