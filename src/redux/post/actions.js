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
