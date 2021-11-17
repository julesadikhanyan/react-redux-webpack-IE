import React from "react";
import BackButton from "../BackButton";
import {Alert, AlertTitle} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    alert: {
        width: "100%",
        boxSizing: "border-box"
    }
}));

const Error = (props) => {
    const classes = useStyles();

    return (
        <div className="container">
            <div className="buttonContainer">
                <BackButton/>
            </div>
            <Alert className={classes.alert} severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{props.error}</strong>
            </Alert>
        </div>
    )
}

export default Error;