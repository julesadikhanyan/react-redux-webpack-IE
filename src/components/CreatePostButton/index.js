import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        minWidth: "600px"
    }
}));
const CreatePostButton = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Button className={classes.button} variant="contained" color="secondary" onClick={() => history.push("/new_post")}>
            Create new post
        </Button>
    )
}

export default CreatePostButton;