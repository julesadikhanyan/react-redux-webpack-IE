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


export function fetchUser(id) {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get(`https://gorest.co.in/public/v1/users/${id.id}`)
            .then(response => {
                const user = response.data.data;
                dispatch(fetchUserSuccess(user));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchUserFailure(message));
            });
    }
}