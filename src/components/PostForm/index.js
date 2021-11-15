import React from "react";
import {Button, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    postForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    typography: {
        fontWeight: "bold",
        textAlign: "left",
        width: "100%"
    },
    textField: {
        margin: "10px 0 20px 0",
        width: "100%"
    },
    button: {
        width: 200,
        marginTop: 10,
        backgroundColor: theme.palette.secondary.light,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.info.light,
        }
    }
}));

const PostForm = (props) => {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetch({title: title, body: body});
        setTitle("");
        setBody("");
    };

    const classes = useStyles();

    return (
        <div>
            <form className={classes.postForm} onSubmit={handleSubmit}>
                <Typography className={classes.typography}>Enter post title:</Typography>
                <TextField
                    variant="outlined"
                    label="Title..."
                    value={title}
                    className={classes.textField}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Typography className={classes.typography}>Enter post body:</Typography>
                <TextField
                    variant="outlined"
                    multiline
                    label="Body..."
                    value={body}
                    minRows={4}
                    className={classes.textField}
                    onChange={(e) => setBody(e.target.value)}
                />
                <Button
                    variant="contained"
                    type="submit"
                    className={classes.button}
                    disabled={!title.trim() || !body.trim() || !props.token}>Save Post</Button>
            </form>
        </div>
    )
}

export default PostForm;