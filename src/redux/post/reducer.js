import * as types from "./actionsType";
import { initialState } from "../users/reducer";

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_POST_SUCCESS:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {},
                postDetails: action.postDetails
            }
        case types.FETCH_POST_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {},
                postDetails: {}
            }
        case types.CLEAR_STORE_POST:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {},
                postDetails: {}
            }
        default: return state
    }
}

export default postReducer;