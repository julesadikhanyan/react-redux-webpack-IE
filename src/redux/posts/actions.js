import axios from "axios";

import * as types from "./actionsType";

export const fetchPostsRequest = () => {
    return {
        type: types.FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts, pages) => {
    return {
        type: types.FETCH_POSTS_SUCCESS,
        posts: posts,
        pages: pages
    }
}

export const fetchPostsFailure = (error) => {
    return {
        type: types.FETCH_POSTS_FAILURE,
        error: error
    }
}

export function fetchPosts(page) {
    return function (dispatch) {
        dispatch(fetchPostsRequest());
        axios.get(`https://gorest.co.in/public/v1/posts?page=${page}`)
            .then(response => {
                const pages = response.data.meta.pagination.pages;
                const posts = response.data.data;
                dispatch(fetchPostsSuccess(posts, pages));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchPostsFailure(message));
            });
    }
}