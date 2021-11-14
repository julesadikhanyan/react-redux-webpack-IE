import * as types from "./actionsType";

export const initialState = {
    posts: [],
    postsPages: 0,
    postsError: "",
    activePostsPage: 1,
    loading: true
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                postsPages: action.postsPages,
                loading: false
            }
        case types.FETCH_POSTS_FAILURE:
            return {
                ...state,
                postsError: action.postsError,
                loading: false
            }
        case types.CLEAR_STORE_POSTS:
            return {
                ...state,
                posts: [],
                postsPages: 0,
                postsError: ""
            }
        case types.SET_ACTIVE_POSTS_PAGE:
            return {
                ...state,
                activePostsPage: action.activePostsPage
            }
        default: return state
    }
}

export default postsReducer;