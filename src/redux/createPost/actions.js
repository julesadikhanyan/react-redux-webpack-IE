import axios from "axios";

import * as types from "./actionsType";

export const fetchCreatePostRequest = () => {
    return {
        type: types.FETCH_CREATE_POST_REQUEST
    }
}

export const fetchCreatePostSuccess = () => {
    return {
        type: types.FETCH_CREATE_POST_SUCCESS
    }
}

export const fetchCreatePostFailure = (error) => {
    return {
        type: types.FETCH_CREATE_POST_FAILURE,
        createPostError: error
    }
}

export function fetchCreatePost(post) {
    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${post.token}`
        }
    });
    return function (dispatch) {
        dispatch(fetchCreatePostRequest());
        authAxios.post(`https://gorest.co.in/public/v1/posts`, {
            user: "user",
            user_id: "1612",
            title: post.title,
            body: post.text
        })
            .then(() => {
                dispatch(fetchCreatePostSuccess());
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchCreatePostFailure(message));
            });
    }
}