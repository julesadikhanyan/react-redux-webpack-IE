import * as types from "./actionsType";

import { initialState } from "../users/reducer";

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: [],
                posts: [],
                error: "",
                pages: action.pages,
                userDetails: action.userDetails
            }
        case types.FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0,
                userDetails: {}
            }
        default: return state
    }
}

export default userReducer;