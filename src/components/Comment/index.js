import React from "react";
import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
}));

const Comment = (props) => {
    const letter = props.comment.name[0];
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar className={classes.purple}>{letter}</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>{props.comment.name}</Typography>
                        <Typography color="secondary">{props.comment.body}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Comment;
