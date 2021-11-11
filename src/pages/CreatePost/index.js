import React from "react";
import PostForm from "../../components/PostForm";
import {useDispatch} from "react-redux";
import {fetchCreatePost} from "../../redux/creatPost/actions";

const CreatePost = () => {
    const dispatch = useDispatch();

    const fetch = (post) => {
        dispatch(fetchCreatePost(post));
    }
    return (
        <>
            <PostForm fetch={fetch}/>
        </>
    )
}

export default CreatePost;