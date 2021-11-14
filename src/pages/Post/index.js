import React, { useEffect } from "react";
import { fetchPost } from "../../redux/post/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../../components/PostCard";
import { CLEAR_STORE_POST } from "../../redux/post/actionsType";
import Comment from "../../components/Comment";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import {makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    postContainer: {
        width: "60vw",
        margin: "auto",
        marginTop: 20
    },
    postTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
    postCard: {
        margin: "20px 0 20px 0"
    },
    postDetails: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    alert: {
        width: "100%"
    }
}));

const Post = () => {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost(params));
        return () => {
            dispatch({ type: CLEAR_STORE_POST })
        }
    }, []);

    const postDetails = useSelector(state => state.postReducer.postDetails);
    const postComments = useSelector(state => state.postReducer.postComments);
    const loading = useSelector(state => state.postReducer.loading);
    const error = useSelector(state => state.postReducer.postError);
    const postCommentsError = useSelector(state => state.postReducer.postCommentsError);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{error}</strong>
            </Alert>
        )
    }

    return (
        <div className={classes.postContainer}>
            <BackButton/>
            <div className={classes.postDetails}>
                <Typography className={classes.postTitle} variant="h4">Post Details</Typography>
                {
                    Object.keys(postDetails).length > 0 &&
                    <PostCard className={classes.postCard} postDetails={postDetails} fetch={fetch}/>
                }
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
                        <Typography>The post has no comments</Typography>
                }
            </div>
        </div>
    )
}

export default Post;