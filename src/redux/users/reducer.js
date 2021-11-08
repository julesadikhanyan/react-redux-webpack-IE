import * as types from "./actionsType";

export const initialState = {
    loading: false,
    users: [],
    posts: [],
    error: ""
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
                error: ""
            }
        case types.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                posts: [],
                error: action.error
            }
        default: return state
    }
}

export default usersReducer;