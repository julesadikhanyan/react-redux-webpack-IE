import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchPosts } from "../../redux/posts/actions";
import PostsTable from "../../components/PostsTable";

const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const posts = useSelector(state => state.postsReducer.posts);

    return (
        <>
            {
                posts.length > 0 &&
                <PostsTable posts={posts}/>
            }
        </>
    )
}

export default Posts;