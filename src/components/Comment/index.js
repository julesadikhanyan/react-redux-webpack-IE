import React from "react";
import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    commentContainer: {
        flexGrow: 1,
        padding: theme.spacing(1, 0),
        minWidth: 400,
        width: "60vw"
    },
    paper: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.info.light}`
    },
    avatar: {
        backgroundColor: theme.palette.info.light,
        marginLeft: 0
    },
}));

const Comment = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.commentContainer}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
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
