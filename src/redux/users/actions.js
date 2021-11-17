import axios from "axios";

import * as types from "./actionsType";

export const fetchUsersRequest = () => {
    return {
        type: types.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users, usersPagesCount) => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        users: users,
        usersPagesCount: usersPagesCount
    }
}

export const fetchUsersFailure = (usersError) => {
    return {
        type: types.FETCH_USERS_FAILURE,
        usersError: usersError
    }
}

export const setActiveUsersPage = (activeUsersPage) => {
    return {
        type: types.SET_ACTIVE_USERS_PAGE,
        activeUsersPage: activeUsersPage
    }
}

export function fetchUsers(activeUsersPage) {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get(`https://gorest.co.in/public/v1/users?page=${activeUsersPage}`)
            .then(response => {
                const users = response.data.data;
                const usersPagesCount = response.data.meta.pagination.pages;
                dispatch(fetchUsersSuccess(users, usersPagesCount));
            })
            .catch(error => {
                    const message = error.message;
                    dispatch(fetchUsersFailure(message));
            });
    }
}