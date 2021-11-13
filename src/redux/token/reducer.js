import * as types from "./actionsType";

export const initialState = {
    token: localStorage.getItem("token"),
}

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACCESS_TOKEN:
            return {
                token: action.token
            }
        default: return state
    }
}

export default tokenReducer;