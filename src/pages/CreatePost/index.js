import React, {useEffect} from "react";
import PostForm from "../../components/PostForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreatePost} from "../../redux/post/actions";
import {Link, makeStyles, Typography} from "@material-ui/core";
import {fetchUsers} from "../../redux/users/actions";
import {Alert, AlertTitle} from "@material-ui/lab";
import {CLEAN_CREATE_POST} from "../../redux/post/actionsType";
import {useHistory} from "react-router-dom";
import BackButton from "../../components/BackButton";

const useStyles = makeStyles(() => ({
    postFormContainer: {
        width: "60vw",
        margin: "auto",
        marginTop: 20
    },
    postTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
    postForm: {
        margin: "20px 0 20px 0"
    },
    alert: {
        width: "100%",
        marginBottom: 20
    },
    link: {
        cursor: "pointer",
        fontWeight: "bold"
    }
}));

const CreatePost = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const userID = useSelector(state => state.usersReducer.userID);
    const token = useSelector(state => state.postReducer.token);
    const error = useSelector(state => state.postReducer.createPostError);
    const postID = useSelector(state => state.postReducer.postID);
    const isSuccess = useSelector(state => state.postReducer.isSuccess);

    useEffect(() => {
        if (userID === -1 && token) {
            dispatch(fetchUsers(1));
        }
    });

    useEffect(() => {
        return () => {
            dispatch({ type: CLEAN_CREATE_POST })
        }
    }, []);

    const fetch = (post) => {
        dispatch(fetchCreatePost(token, post, userID));
    };

    return (
        <div className={classes.postFormContainer}>
            <BackButton/>
            {
                isSuccess &&
                <Alert className={classes.alert} severity="success">
                    <AlertTitle>The post was created successfully</AlertTitle>
                    <Link className={classes.link} onClick={() => history.push(`/post/${postID}`)}>OPEN POST</Link>
                </Alert>
            }
            {
                error &&
                <Alert className={classes.alert} severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>{error}</strong>
                </Alert>
            }
            {
                !token &&
                <Alert className={classes.alert} severity="warning">
                    <AlertTitle>Enter access-token to save your post</AlertTitle>
                </Alert>
            }
            <Typography className={classes.postTitle} variant="h4">Post Form</Typography>
            <PostForm token={token} fetch={fetch}/>
        </div>
    )
}

export default CreatePost;