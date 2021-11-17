import React from "react";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    postCard: {
        margin: "20px 0 20px 0",
        border: `3px solid ${theme.palette.info.light}`,
        boxShadow: "none",
        width: "60vw",
        minWidth: 400,
        boxSizing: "border-box"
    },
    avatar: {
        backgroundColor: theme.palette.info.light,
        marginLeft: 0
    }
}));

const PostCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.postCard}>
            <CardContent>
                <Typography align="center" variant="h5">
                    {props.postDetails.title}
                </Typography>
                <Typography align="justify">
                    {props.postDetails.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PostCard;