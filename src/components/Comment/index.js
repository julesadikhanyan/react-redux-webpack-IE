import React from "react";
import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(2, 0),
        width: "100%"
    },
    paper: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.info.light}`
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    avatar: {
        backgroundColor: theme.palette.info.light,
        marginLeft: 0
    },
}));

const Comment = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar className={classes.avatar}/>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">{props.comment.name}</Typography>
                        <Typography>{props.comment.body}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Comment;
