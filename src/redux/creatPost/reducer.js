import * as types from "./actionsType";

export const initialState = {
    createPostErrors: ""
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CREATE_POST_REQUEST:
            return state
        case types.FETCH_CREATE_POST_SUCCESS:
            return state
        case types.FETCH_CREATE_POST_FAILURE:
            return {
                ...state,
                createPostErrors: action.createPostErrors
            }
        default: return state
    }
}

export default createPostReducer;