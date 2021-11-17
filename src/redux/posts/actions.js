import axios from "axios";

import * as types from "./actionsType";

export const fetchPostsRequest = () => {
    return {
        type: types.FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts, postsPagesCount) => {
    return {
        type: types.FETCH_POSTS_SUCCESS,
        posts: posts,
        postsPagesCount: postsPagesCount
    }
}

export const fetchPostsFailure = (postsError) => {
    return {
        type: types.FETCH_POSTS_FAILURE,
        postsError: postsError
    }
}

export const setActivePostsPage = (activePostsPage) => {
    return {
        type: types.SET_ACTIVE_POSTS_PAGE,
        activePostsPage: activePostsPage
    }
}

export function fetchPosts(activePostsPage) {
    return function (dispatch) {
        dispatch(fetchPostsRequest());
        axios.get(`https://gorest.co.in/public/v1/posts?page=${activePostsPage}`)
            .then(response => {
                const posts = response.data.data;
                const postPagesCount = response.data.meta.pagination.pages;
                dispatch(fetchPostsSuccess(posts, postPagesCount));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchPostsFailure(message));
            });
    }
}