import React, {useEffect} from "react";
import PostForm from "../../components/PostForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreatePost, fetchEditPost} from "../../redux/createPost/actions";
import {Link, makeStyles, Typography} from "@material-ui/core";
import {fetchUsers} from "../../redux/users/actions";
import {Alert, AlertTitle} from "@material-ui/lab";
import {CLEAR_CREATE_POST} from "../../redux/createPost/actionsType";
import {useHistory, useLocation} from "react-router-dom";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import {fetchPost} from "../../redux/post/actions";
import {CLEAR_POST_STORE} from "../../redux/post/actionsType";
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
    const location = useLocation();

    const token = useSelector(state => state.tokenReducer.token);
    const postDetails = useSelector(state => state.postReducer.postDetails);
    const error = useSelector(state => state.createPostReducer.createPostError);
    const postID = useSelector(state => state.createPostReducer.postID);
    const isSuccess = useSelector(state => state.createPostReducer.isSuccess);
    const users = useSelector(state => state.usersReducer.users);
    const createPostLoading = useSelector(state => state.postReducer.createPostLoading);

    useEffect(() => {
        if (token) {
            dispatch(fetchUsers(1));
        }
    }, [token]);

    useEffect(() => {
        return () => {
            dispatch({ type: CLEAR_CREATE_POST });
            dispatch({ type: CLEAR_POST_STORE});
        }
    }, []);

   useEffect(() => {
        const id = location.search.slice(9);
        if (id !== "") {
            dispatch(fetchPost(id));
        }
    }, []);

    const fetch = (post) => {
        dispatch({ type: CLEAR_POST_STORE});
        if (location.search.slice(9) === "") {
            dispatch(fetchCreatePost(token, post, users[0].id));
        } else {
            dispatch(fetchEditPost(token, post, users[0].id, location.search.slice(9)));
        }
    };

    const historyPush = () => {
        if (location.search.slice(9) !== "") {
            history.push(`/post/${location.search.slice(9)}`);
        } else {
            history.push(`/post/${postID}`);
        }

    }

   if (location.search.slice(9) !== "" && createPostLoading) {
        return <Loading/>
    }

    return (
        <div className={classes.postFormContainer}>
            <BackButton/>
            {
                isSuccess &&
                <Alert className={classes.alert} severity="success">
                    <AlertTitle>The post was created successfully</AlertTitle>
                    <Link className={classes.link} onClick={() => historyPush()}>OPEN POST</Link>
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
            <PostForm title={postDetails.title} body={postDetails.body} token={token} fetch={fetch}/>
        </div>
    )
}

export default CreatePost;