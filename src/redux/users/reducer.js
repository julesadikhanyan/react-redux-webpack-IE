import * as types from "./actionsType";

export const initialState = {
    usersLoading: true,
    users: [],
    usersPagesCount: 0,
    activeUsersPage: 1,
    usersError: ""
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_REQUEST:
            return {
                ...state,
                usersLoading: true
            }
        case types.FETCH_USERS_SUCCESS:
            return {
                ...state,
                usersLoading: false,
                users: action.users,
                usersPagesCount: action.usersPagesCount
            }
        case types.FETCH_USERS_FAILURE:
            return {
                ...state,
                usersLoading: false,
                usersError: action.usersError,
            }
        case types.SET_ACTIVE_USERS_PAGE:
            return {
                ...state,
                activeUsersPage: action.activeUsersPage
            }
        case types.CLEAR_STORE_USERS:
            return {
                ...state,
                usersLoading: true,
                users: [],
                usersError: "",
                usersPagesCount: 0,
            }
        default: return state
    }
}

export default usersReducer;