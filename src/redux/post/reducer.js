import * as types from "./actionsType";

export const initialState = {
    postDetails: {},
    postError: "",
    postComments: [],
    postCommentsError: "",
    loading: true
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                postDetails: action.postDetails,
                loading: true
            }
        case types.FETCH_POST_FAILURE:
            return {
                ...state,
                postError: action.postError,
                loading: false
            }
        case types.CLEAR_STORE_POST:
            return {
                postDetails: {},
                postErrors: "",
                postComments: [],
                postCommentsError: ""
            }
        case types.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                postComments: action.postComments,
                loading: false
            }
        case types.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                postCommentsError: action.postCommentsError,
                loading: false
            }
        default: return state
    }
}

export default postReducer;