import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {fetchPosts, setActivePostsPage} from "../../redux/posts/actions";
import PostsTable from "../../components/PostsTable";
import { CLEAR_STORE_POSTS } from "../../redux/posts/actionsType";

const Posts = () => {
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
    const activePostsPage = useSelector(state => state.postsReducer.activePostsPage)

    return (
        <>
            {
                posts.length > 0 &&
                <PostsTable posts={posts} pages={pages} activePostsPage={activePostsPage} fetch={fetch}/>
            }
        </>
    )
}

export default Posts;