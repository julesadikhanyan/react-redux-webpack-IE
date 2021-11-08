import axios from "axios";

import * as types from "./actionsType";

export const fetchPostsRequest = () => {
    return {
        type: types.FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: types.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const fetchPostsFailure = (error) => {
    return {
        type: types.FETCH_POSTS_FAILURE,
        error: error
    }
}

export function fetchPosts() {
    return function (dispatch) {
        dispatch(fetchPostsRequest());
        axios.get("https://gorest.co.in/public/v1/posts")
            .then(response => {
                const posts = response.data.data;
                console.log(posts);
                dispatch(fetchPostsSuccess(posts));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchPostsFailure(message));
            });
    }
}