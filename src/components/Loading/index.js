import React from "react";
import {Box, CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    progress: {
        color: theme.palette.info.light
    },
    box: {
        margin: "-75px 0 0 -75px",
        width: "150px",
        height: "150px",
        position: "absolute",
        top: "50%",
        left: "50%"
    }
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <CircularProgress className={classes.progress} size={100}/>
        </Box>
    )
}

export default Loading;