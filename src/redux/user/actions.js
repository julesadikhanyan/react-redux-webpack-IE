import * as types from "./actionsType"
import axios from "axios";

export const fetchUserRequest = () => {
    return {
        type: types.FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (userDetails) => {
    return {
        type: types.FETCH_USER_SUCCESS,
        users: [],
        pages: 0,
        userDetails: userDetails
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: types.FETCH_USER_FAILURE,
        error: error
    }
}

export const fetchUserPostsRequest = () => {
    return {
        type: types.FETCH_USER_POSTS_REQUEST
    }
}

export const fetchUserPostsSuccess = (userPosts) => {
    return {
        type: types.FETCH_USER_POSTS_SUCCESS,
        users: [],
        pages: 0,
        userPosts: userPosts
    }
}

export const fetchUserPostsFailure = (error) => {
    return {
        type: types.FETCH_USER_POSTS_FAILURE,
        error: error
    }
}

export function fetchUser(id) {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get(`https://gorest.co.in/public/v1/users/${id.id}`)
            .then(response => {
                const user = response.data.data;
                dispatch(fetchUserSuccess(user));
            })
            .then(() => {
                dispatch(fetchUserPostsRequest());
                axios.get(`https://gorest.co.in/public/v1/users/${id.id}/posts`)
                    .then(response => {
                        const posts = response.data.data;
                        dispatch(fetchUserPostsSuccess(posts));
                    })
                    .catch(error => {
                        const message = error.message;
                        dispatch(fetchUserPostsFailure(message));
                    });
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchUserFailure(message));
            });
    }
}