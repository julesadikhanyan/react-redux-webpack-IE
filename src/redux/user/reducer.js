import * as types from "./actionsType";

export const initialState = {
    userDetails: {},
    userPosts: [],
    userError: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return state
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                userDetails: action.userDetails
            }
        case types.FETCH_USER_FAILURE:
            return {
                ...state,
                userError: action.userError
            }
        case types.CLEAR_STORE_USER:
            return {
                userDetails: {},
                userPosts: [],
                userError: ""
            }
        case types.FETCH_USER_POSTS_REQUEST:
            return state
        case types.FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                userPosts: action.userPosts
            }
        case types.FETCH_USER_POSTS_FAILURE:
            return {
                ...state,
                userError: action.userError,
            }
        case types.CLEAR_STORE_POSTS_USER:
            return {
                userDetails: {},
                userPosts: [],
                userError: ""
            }
        default: return state
    }
}

export default userReducer;