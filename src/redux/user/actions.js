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
        userDetails: userDetails
    }
}

export const fetchUserFailure = (userError) => {
    return {
        type: types.FETCH_USER_FAILURE,
        userError: userError
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
        userPosts: userPosts
    }
}

export const fetchUserPostsFailure = (userPostsError) => {
    return {
        type: types.FETCH_USER_POSTS_FAILURE,
        userPostsError: userPostsError
    }
}

export function fetchUser(userID) {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get(`https://gorest.co.in/public/v1/users/${userID}`)
            .then(response => {
                const user = response.data.data;
                dispatch(fetchUserSuccess(user));
            })
            .then(() => {
                dispatch(fetchUserPostsRequest());
                axios.get(`https://gorest.co.in/public/v1/users/${userID}/posts`)
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