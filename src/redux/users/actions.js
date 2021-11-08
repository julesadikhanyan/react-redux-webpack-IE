import axios from "axios";

import * as types from "./actionsType";

export const fetchUsersRequest = () => {
    return {
        type: types.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users, pages) => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        users: users,
        pages: pages
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: types.FETCH_USERS_FAILURE,
        error: error
    }
}

export function fetchUsers(page) {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get(`https://gorest.co.in/public/v1/users?page=${page}`)
            .then(response => {
                const pages = response.data.meta.pagination.pages;
                const users = response.data.data;
                dispatch(fetchUsersSuccess(users, pages));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchUsersFailure(message));
            });
    }
}