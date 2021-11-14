import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.info.light,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.info.light,
        }
    }
}));

const BackButton = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Button variant="contained" className={classes.button} onClick={() => history.goBack()}>
            <ArrowBackIcon/>
        </Button>
    )
}

export default BackButton;