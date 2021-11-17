import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";
import tokenReducer from "./token/reducer";
import createPostReducer from "./createPost/reducer";

export const rootReducer = combineReducers({
    usersReducer,
    postsReducer,
    postReducer,
    userReducer,
    tokenReducer,
    createPostReducer
});