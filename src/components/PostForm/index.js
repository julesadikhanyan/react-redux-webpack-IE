import React from "react";
import {Button, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    postForm: {
        '& > *': {
            margin: theme.spacing(3),
        }
    },
}));

const PostForm = (props) => {
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [token, setToken] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetch({token: token, title: title, text: text});
    };

    const classes = useStyles();

    return (
        <div>
            <form className={classes.postForm} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    label="Access-token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    multiline
                    label="Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    disabled={!text.trim() || !token.trim() || !title.trim()}>Save Post</Button>
            </form>

        </div>
    )
}

export default PostForm;