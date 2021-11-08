import axios from "axios";

import * as types from "./actionsType";

export const fetchUsersRequest = () => {
    return {
        type: types.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        users: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: types.FETCH_USERS_FAILURE,
        error: error
    }
}

export function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://gorest.co.in/public/v1/users")
            .then(response => {
                const users = response.data.data;
                console.log(users);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchUsersFailure(message));
            });
    }
}