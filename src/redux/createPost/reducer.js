import * as types from "./actionsType";

export const initialState = {
    createPostLoading: false,
    postID: -1,
    createPostError: "",
    isSuccess: false
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CREATE_POST_REQUEST:
            return {
                ...state,
                createPostLoading: true
            }
        case types.FETCH_CREATE_POST_SUCCESS:
            return {
                ...state,
                postID: action.postID,
                createPostLoading: false,
                isSuccess: true
            }
        case types.FETCH_CREATE_POST_FAILURE:
            return {
                ...state,
                createPostLoading: false,
                createPostError: action.createPostError,
            }
        case types.CLEAR_CREATE_POST:
            return {
                ...state,
                createPostLoading: false,
                createPostError: "",
                isSuccess: false
            }
        case types.FETCH_EDIT_POST_REQUEST:
            return {
                ...state,
                createPostLoading: true
            }
        case types.FETCH_EDIT_POST_SUCCESS:
            return {
                ...state,
                createPostLoading: false,
                isSuccess: true
            }
        case types.FETCH_EDIT_POST_FAILURE:
            return {
                ...state,
                createPostLoading: false,
                createPostError: action.createPostError
            }
        default: return state
    }
}

export default createPostReducer;