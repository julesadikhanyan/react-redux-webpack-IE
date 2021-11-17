import React, { useEffect } from "react";
import { fetchPost } from "../../redux/post/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../../components/PostCard";
import Comment from "../../components/Comment";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import {Button, makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {CLEAR_POST_STORE} from "../../redux/post/actionsType";
import Error from "../../components/Error";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    postTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
    alert: {
        width: "100%",
        boxSizing: "border-box"
    },
    postButton: {
        width: 200,
        backgroundColor: theme.palette.secondary.light,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
        marginBottom: 20
    }
}));

const Post = () => {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const postDetails = useSelector(state => state.postReducer.postDetails);
    const postComments = useSelector(state => state.postReducer.postComments);
    const loading = useSelector(state => state.postReducer.postLoading);
    const error = useSelector(state => state.postReducer.postError);
    const postCommentsError = useSelector(state => state.postReducer.postCommentsError);

    useEffect(() => {
        dispatch(fetchPost(params.id));
        return () => {
            dispatch({ type: CLEAR_POST_STORE } );
        }
    }, []);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="buttonContainer">
                <BackButton/>
            </div>
            <Typography className={classes.postTitle} variant="h4">Post Details</Typography>
            <PostCard postDetails={postDetails}/>
            <div className="buttonContainer">
                <Button
                    className={classes.postButton}
                    variant="contained"
                    onClick={() => history.push(`/new_post?post_id=${postDetails.id}`)}>Edit post</Button>
            </div>
            <Typography className={classes.postTitle} variant="h4">Post Comments</Typography>
            {
                postComments && postComments.length > 0 ?
                    postComments.map((comment) =>
                        <Comment key={comment.id} comment={comment}/>) :
                        postCommentsError ?
                            <Alert className={classes.alert} severity="error">
                                <AlertTitle>Error</AlertTitle>
                                <strong>{postCommentsError}</strong>
                            </Alert> :
                        <Typography align="center">The post has no comments</Typography>
            }
        </div>
    )
}

export default Post;