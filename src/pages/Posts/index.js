import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {fetchPosts, setActivePostsPage} from "../../redux/posts/actions";
import PostsTable from "../../components/PostsTable";
import { CLEAR_STORE_POSTS } from "../../redux/posts/actionsType";
import Loading from "../../components/Loading";
import {Button, makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {useHistory} from "react-router-dom";
import Pages from "../../components/Pagination";

const useStyles = makeStyles((theme) => ({
    postsTitle: {
        fontWeight: "bold",
        marginTop: 20
    },
    postsButton: {
        width: 200,
        backgroundColor: theme.palette.secondary.light,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.info.light,
        },
        marginTop: 10,
        marginBottom: 10
    }
}));

const Posts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const posts = useSelector(state => state.postsReducer.posts);
    const pages = useSelector(state => state.postsReducer.postsPagesCount);
    const activePostsPage = useSelector(state => state.postsReducer.activePostsPage);
    const loading = useSelector(state => state.postsReducer.postsLoading);
    const error = useSelector(state => state.postsReducer.postsError);

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
        <div className="container">
            <Typography className={classes.postsTitle} variant="h4">Posts List</Typography>
            <Typography>Page: {activePostsPage}</Typography>
            <Button
                className={classes.postsButton}
                variant="contained"
                onClick={() => history.push("/new_post")}>Create new post</Button>
            <PostsTable posts={posts}/>
            <Pages pages={pages} fetch={fetch} activePage={activePostsPage}/>
        </div>
    )
}

export default Posts;