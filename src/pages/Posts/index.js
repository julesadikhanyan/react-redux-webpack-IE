import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPosts } from "../../redux/posts/actions";

const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    });

    return (
        <h1>Posts</h1>
    )
}

export default Posts;