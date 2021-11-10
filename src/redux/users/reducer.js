import * as types from "./actionsType";

export const initialState = {
    loading: false,
    users: [],
    posts: [],
    error: "",
    pages: 0,
    userDetails: {},
    postDetails: {},
    userPosts: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.users,
                posts: [],
                error: "",
                pages: action.pages,
                userDetails: {},
                postDetails: {}
            }
        case types.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {},
                postDetails: {}
            }
        case types.CLEAR_STORE_USERS:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {}
            }
        default: return state
    }
}

export default usersReducer;