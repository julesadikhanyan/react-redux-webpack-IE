import * as types from "./actionsType";

export const initialState = {
    postsLoading: true,
    posts: [],
    postsPagesCount: 0,
    activePostsPage: 1,
    postsError: ""
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
        case types.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                postsPagesCount: action.postsPagesCount,
                postsLoading: false
            }
        case types.FETCH_POSTS_FAILURE:
            return {
                ...state,
                postsError: action.postsError,
                postsLoading: false
            }
        case types.SET_ACTIVE_POSTS_PAGE:
            return {
                ...state,
                activePostsPage: action.activePostsPage
            }
        case types.CLEAR_STORE_POSTS:
            return {
                ...state,
                postsLoading: true,
                posts: [],
                postsPagesCount: 0,
                postsError: ""
            }
        default: return state
    }
}

export default postsReducer;