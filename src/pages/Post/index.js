import React, { useEffect } from "react";
import { fetchPost } from "../../redux/post/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../../components/PostCard";

const Post = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost(params));
    }, [])

    const postDetails = useSelector(state => state.postReducer.postDetails);

    return (
        <>
            {
                Object.keys(postDetails).length > 0 &&
                <PostCard postDetails={postDetails}/>
            }
        </>
    )
}

export default Post;