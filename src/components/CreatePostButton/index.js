import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        width: 200,
        backgroundColor: theme.palette.secondary.light,
        color: "white",
        marginTop: 20,
        '&:hover': {
            backgroundColor: theme.palette.info.light,
        }
    }
}));
const CreatePostButton = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Button className={classes.button} variant="contained" onClick={() => history.push("/new_post")}>
            Create new post
        </Button>
    )
}

export default CreatePostButton;