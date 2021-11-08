import * as types from "./actionsType";

export const initialState = {
    loading: false,
    users: [],
    posts: [],
    error: "",
    pages: 0
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.users,
                posts: [],
                error: "",
                pages: action.pages
            }
        case types.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error,
                pages: 0
            }
        default: return state
    }
}

export default usersReducer;