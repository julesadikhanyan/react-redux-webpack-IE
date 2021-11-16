import axios from "axios";

import * as types from "./actionsType";

export const fetchPostRequest = () => {
    return {
        type: types.FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (postDetails) => {
    return {
        type: types.FETCH_POST_SUCCESS,
        postDetails: postDetails
    }
}

export const fetchPostFailure = (postError) => {
    return {
        type: types.FETCH_POST_FAILURE,
        postError: postError
    }
}

export const fetchCommentsRequest = () => {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    }
}

export const fetchCommentsSuccess = (postComments) => {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        postComments: postComments
    }
}

export const fetchCommentsFailure = (postCommentsError) => {
    return {
        type: types.FETCH_COMMENTS_FAILURE,
        postCommentsError: postCommentsError
    }
}

export const fetchCreatePostRequest = () => {
    return {
        type: types.FETCH_CREATE_POST_REQUEST
    }
}

export const fetchCreatePostSuccess = (id) => {
    return {
        type: types.FETCH_CREATE_POST_SUCCESS,
        postID: id
    }
}

export const fetchCreatePostFailure = (createPostError) => {
    return {
        type: types.FETCH_CREATE_POST_FAILURE,
        createPostError: createPostError
    }
}

export const setAccessToken = (token) => {
    return {
        type: types.SET_ACCESS_TOKEN,
        token: token
    }
}

export const fetchEditPostRequest = () => {
    return {
        type: types.FETCH_CREATE_POST_REQUEST
    }
}

export const fetchEditPostSuccess = () => {
    return {
        type: types.FETCH_CREATE_POST_SUCCESS,
    }
}

export const fetchEditPostFailure = (editPostError) => {
    return {
        type: types.FETCH_CREATE_POST_FAILURE,
        editPostError: editPostError
    }
}

export function fetchPost(id) {
    return function (dispatch) {
        dispatch(fetchPostRequest());
        axios.get(`https://gorest.co.in/public/v1/posts/${id}`)
            .then(response => {
                const post = response.data.data;
                dispatch(fetchPostSuccess(post));
            })
            .then(() => {
                dispatch(fetchCommentsRequest());
                axios.get(`https://gorest.co.in/public/v1/comments?post_id=${id}`)
                    .then(response => {
                        const comments = response.data.data;
                        dispatch(fetchCommentsSuccess(comments));
                    })
                    .catch(error => {
                        const message = error.message;
                        dispatch(fetchCommentsFailure(message));
                    });
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchPostFailure(message));
            });
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
                const id = response.data.data.id;
                dispatch(fetchCreatePostSuccess(id));
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
                console.log(error.response);
                dispatch(fetchEditPostFailure(message));
            });
    }
}