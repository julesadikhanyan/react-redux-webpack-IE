import * as types from "./actionsType";

export const initialState = {
    postLoading: true,
    postDetails: {},
    postComments: [],
    postError: "",
    postCommentsError: "",
    createPostError: "",
    editPostError: "",
    createPostLoading: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return {
                ...state,
                postLoading: true,
                createPostLoading: true
            }
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                postDetails: action.postDetails,
                postLoading: true,
                createPostLoading: true
            }
        case types.FETCH_POST_FAILURE:
            return {
                ...state,
                postError: action.postError,
                postLoading: false,
                createPostLoading: false
            }
        case types.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                postLoading: true,
                createPostLoading: true
            }
        case types.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                postComments: action.postComments,
                postLoading: false,
                createPostLoading: false
            }
        case types.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                postCommentsError: action.postCommentsError,
                postLoading: false,
                createPostLoading: false
            }
        case types.CLEAR_POST_STORE: {
            return {
                ...state,
                postError: "",
                createPostError: "",
                postDetails: {},
                postLoading: true,
                createPostLoading: false
            }
        }
        default: return state
    }
}

export default postReducer;