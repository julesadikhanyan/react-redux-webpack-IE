import * as types from "./actionsType";

export const initialState = {
    postDetails: {},
    postErrors: ""
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return state
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                postDetails: action.postDetails
            }
        case types.FETCH_POST_FAILURE:
            return {
                ...state,
                postErrors: action.postErrors
            }
        case types.CLEAR_STORE_POST:
            return {
                postDetails: {},
                postErrors: ""
            }
        default: return state
    }
}

export default postReducer;