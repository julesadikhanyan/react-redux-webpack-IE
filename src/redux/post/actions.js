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

export const fetchPostFailure = (error) => {
    return {
        type: types.FETCH_POST_FAILURE,
        postError: error
    }
}

export function fetchPost(id) {
    return function (dispatch) {
        dispatch(fetchPostRequest());
        axios.get(`https://gorest.co.in/public/v1/posts/${id.id}`)
            .then(response => {
                const post = response.data.data;
                dispatch(fetchPostSuccess(post));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchPostFailure(message));
            });
    }
}