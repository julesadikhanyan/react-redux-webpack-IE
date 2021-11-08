import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchPosts } from "../../redux/posts/actions";
import PostsTable from "../../components/PostsTable";


const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(1));
    }, []);

    const fetch = (page) => {
        dispatch(fetchPosts(page));
    }

    const posts = useSelector(state => state.postsReducer.posts);
    const pages = useSelector(state => state.postsReducer.pages);

    return (
        <>
            {
                posts.length > 0 &&
                <PostsTable posts={posts} pages={pages} fetch={fetch}/>
            }
        </>
    )
}

export default Posts;