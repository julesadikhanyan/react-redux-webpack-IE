import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {fetchPosts, setActivePostsPage} from "../../redux/posts/actions";
import PostsTable from "../../components/PostsTable";
import { CLEAR_STORE_POSTS } from "../../redux/posts/actionsType";
import CreatePostButton from "../../components/CreatePostButton";
import Loading from "../../components/Loading";
import {makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    postsList: {
        margin: "auto",
        width: "60vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20,
        marginBottom: 20
    },
    postsTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
}));

const Posts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(activePostsPage));
        return () => {
            dispatch({ type: CLEAR_STORE_POSTS })
        }
    }, []);

    const fetch = (page) => {
        dispatch(setActivePostsPage(page));
        dispatch(fetchPosts(page));
    }

    const posts = useSelector(state => state.postsReducer.posts);
    const pages = useSelector(state => state.postsReducer.postsPages);
    const activePostsPage = useSelector(state => state.postsReducer.activePostsPage);
    const loading = useSelector(state => state.postsReducer.loading);
    const error = useSelector(state => state.postsReducer.postsError);

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
        <div className={classes.postsList}>
            <Typography className={classes.postsTitle} variant="h4">Posts List</Typography>
            <Typography>Page: {activePostsPage}</Typography>
            <CreatePostButton/>
            {
                posts.length > 0 &&
                <PostsTable
                    posts={posts} 
                    pages={pages}
                    activePostsPage={activePostsPage}
                    fetch={fetch}/>
            }
        </div>
    )
}

export default Posts;