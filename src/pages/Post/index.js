import React, { useEffect } from "react";
import { fetchPost } from "../../redux/post/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../../components/PostCard";
import { CLEAR_STORE_POST } from "../../redux/post/actionsType";
import { fetchComments } from "../../redux/comments/actions";
import { CLEAR_STORE_COMMENTS } from "../../redux/comments/actionsType";
import Comment from "../../components/Comment";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";

const Post = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const fetch = (post_id) => {
        dispatch(fetchComments(post_id))
    }

    useEffect(() => {
        dispatch(fetchPost(params));
        return () => {
            dispatch({ type: CLEAR_STORE_POST })
        }
    }, [])

    useEffect(() => {
        dispatch(fetchComments(params.id));
        return () => {
            dispatch({ type: CLEAR_STORE_COMMENTS })
        }
    }, []);

    const postDetails = useSelector(state => state.postReducer.postDetails);
    const postComments = useSelector(state => state.commentsReducer.postComments);

    return (
        <>
            <BackButton/>
            {
                Object.keys(postDetails).length > 0 ?
                <PostCard postDetails={postDetails} fetch={fetch}/> :
                    <Loading/>
            }
            {
                postComments ? postComments.map((comment) =>
                    <Comment key={comment.id} comment={comment}/>
                ) : null
            }
        </>
    )
}

export default Post;