import axios from "axios";

import * as types from "./actionsType";

export const fetchCreatePostRequest = () => {
    return {
        type: types.FETCH_CREATE_POST_REQUEST
    }
}

export const fetchCreatePostSuccess = (postID) => {
    return {
        type: types.FETCH_CREATE_POST_SUCCESS,
        postID: postID
    }
}

export const fetchCreatePostFailure = (createPostError) => {
    return {
        type: types.FETCH_CREATE_POST_FAILURE,
        createPostError: createPostError
    }
}

export const fetchEditPostRequest = () => {
    return {
        type: types.FETCH_EDIT_POST_REQUEST
    }
}

export const fetchEditPostSuccess = () => {
    return {
        type: types.FETCH_EDIT_POST_SUCCESS
    }
}

export const fetchEditPostFailure = (createPostError) => {
    return {
        type: types.FETCH_EDIT_POST_FAILURE,
        createPostError: createPostError
    }
}

export function fetchCreatePost(token, post, userID) {
    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return function (dispatch) {
        dispatch(fetchCreatePostRequest());
        authAxios.post(`https://gorest.co.in/public/v1/posts`, {
            user: "user",
            user_id: userID,
            title: post.title,
            body: post.body
        })
            .then((response) => {
                const postID = response.data.data.id;
                dispatch(fetchCreatePostSuccess(postID));
            })
            .catch(error => {
                const message = error.message;
                console.log(error.response);
                dispatch(fetchCreatePostFailure(message));
            });
    }
}

export function fetchEditPost(token, post, userID, postID) {
    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return function (dispatch) {
        dispatch(fetchEditPostRequest());
        authAxios.put(`https://gorest.co.in/public/v1/posts/${postID}`, {
            user: "user",
            user_id: userID,
            title: post.title,
            body: post.body
        })
            .then(() => {
                dispatch(fetchEditPostSuccess());
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchEditPostFailure(message));
            });
    }
}