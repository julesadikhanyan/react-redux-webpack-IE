import * as types from "./actionsType";

export const initialState = {
    users: [],
    usersError: "",
    usersPages: 0,
    activeUsersPage: 1,
    loading: true,
    userID: -1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                usersPages: action.usersPages,
                loading: false,
                userID: action.users[0].id
            }
        case types.FETCH_USERS_FAILURE:
            return {
                ...state,
                usersError: action.usersError,
                loading: false
            }
        case types.CLEAR_STORE_USERS:
            return {
                ...state,
                users: [],
                usersError: "",
                usersPages: 0,
            }
        case types.SET_ACTIVE_USERS_PAGE:
            return {
                ...state,
                activeUsersPage: action.activeUsersPage
            }
        default: return state
    }
}

export default usersReducer;