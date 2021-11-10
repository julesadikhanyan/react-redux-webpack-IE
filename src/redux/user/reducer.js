import * as types from "./actionsType";

import { initialState } from "../users/reducer";

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: action.pages,
                userDetails: action.userDetails
            }
        case types.FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {}
            }
        case types.CLEAR_STORE_USER:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {}
            }
        case types.FETCH_USER_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                userPosts: action.userPosts
            }
        case types.FETCH_USER_POSTS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {},
                userPosts: action.userPosts
            }
        case types.CLEAR_STORE_POSTS_USER:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {},
                userPosts: action.userPosts
            }
        default: return state
    }
}

export default userReducer;