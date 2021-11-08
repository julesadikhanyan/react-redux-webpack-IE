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
                pages: action.pages
            }
        case types.FETCH_POSTS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0
            }
        default: return state
    }
}

export default postsReducer;