import * as types from "./actionsType";

import { initialState } from "../users/reducer";

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                users: [],
                posts: action.posts,
                error: "",
                pages: action.pages,
                userDetails: {},
                postDetails: {}
            }
        case types.FETCH_POSTS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {},
                postDetails: {}
            }
        case types.CLEAR_STORE_POSTS:
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

export default postsReducer;