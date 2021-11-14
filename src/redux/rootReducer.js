import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";
import createPostReducer from "./createPost/reducer";
import tokenReducer from "./token/reducer";

export default combineReducers({
    usersReducer,
    postsReducer,
    postReducer,
    userReducer,
    createPostReducer,
    tokenReducer
});