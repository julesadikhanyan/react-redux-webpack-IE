import * as types from "./actionsType";
import { initialState } from "../users/reducer";

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {},
                postDetails: {},
                postComments: action.postComments
            }
        case types.FETCH_COMMENTS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {},
                postDetails: {},
                postComments: []
            }
        case types.CLEAR_STORE_COMMENTS:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: 0,
                userDetails: {},
                postDetails: {},
                postComments: []
            }
        default: return state
    }
}

export default commentsReducer;