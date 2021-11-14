import * as types from "./actionsType";

export const initialState = {
    userDetails: {},
    userPosts: [],
    userError: "",
    loading: true,
    userPostError: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                userDetails: action.userDetails,
                loading: true
            }
        case types.FETCH_USER_FAILURE:
            return {
                ...state,
                userError: action.userError,
                loading: false
            }
        case types.CLEAR_STORE_USER:
            return {
                ...state,
                userDetails: {},
                userPosts: [],
                userError: "",
                userPostsError: ""
            }
        case types.FETCH_USER_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                userPosts: action.userPosts,
                loading: false
            }
        case types.FETCH_USER_POSTS_FAILURE:
            return {
                ...state,
                userPostsError: action.userPostsError,
                loading: false
            }
        default: return state
    }
}

export default userReducer;