import * as types from "./actionsType";

export const setAccessToken = (token) => {
    return {
        type: types.SET_ACCESS_TOKEN,
        token: token
    }


}