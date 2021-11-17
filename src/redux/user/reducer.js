import * as types from "./actionsType";

export const initialState = {
    userLoading: true,
    userDetails: {},
    userPosts: [],
    userError: "",
    userPostError: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                userLoading: true
            }
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                userDetails: action.userDetails,
                userLoading: true
            }
        case types.FETCH_USER_FAILURE:
            return {
                ...state,
                userError: action.userError,
                userLoading: false
            }
        case types.FETCH_USER_POSTS_REQUEST:
            return {
                ...state,
                userLoading: true
            }
        case types.FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                userPosts: action.userPosts,
                userLoading: false
            }
        case types.FETCH_USER_POSTS_FAILURE:
            return {
                ...state,
                userPostsError: action.userPostsError,
                userLoading: false
            }
        case types.CLEAR_STORE_USER:
            return {
                userDetails: {},
                userPosts: [],
                userError: "",
                userPostsError: "",
                userLoading: true
            }
        default: return state
    }
}

export default userReducer;