import * as types from "./actionsType";

export const initialState = {
    postComments: [],
    postErrors: ""
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_REQUEST:
            return state
        case types.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                postComments: action.postComments
            }
        case types.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                postErrors: action.postErrors
            }
        case types.CLEAR_STORE_COMMENTS:
            return {
                postComments: [],
                postErrors: ""
            }
        default: return state
    }
}

export default commentsReducer;