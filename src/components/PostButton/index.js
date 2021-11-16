import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        width: 200,
        backgroundColor: theme.palette.secondary.light,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.info.light,
        }
    }
}));
const PostButton = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const historyPush = () => {
        if (props.postID) {
            history.push(`/new_post?post_id=${props.postID}`);
        } else {
            history.push("/new_post")
        }
    }

    return (
        <Button className={classes.button} variant="contained" onClick={() => historyPush()}>
            {props.textButton}
        </Button>
    )
}

export default PostButton;