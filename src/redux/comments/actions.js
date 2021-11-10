import axios from "axios";

import * as types from "./actionsType";

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

export const fetchCommentsFailure = (error) => {
    return {
        type: types.FETCH_COMMENTS_FAILURE,
        error: error
    }
}

export function fetchComments(post_id) {
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        axios.get(`https://gorest.co.in/public/v1/comments?post_id=${post_id}`)
            .then(response => {
                const comments = response.data.data;
                dispatch(fetchCommentsSuccess(comments));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchCommentsFailure(message));
            });
    }
}