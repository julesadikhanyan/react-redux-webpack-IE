import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
    usersReducer,
    postsReducer,
    postReducer,
    userReducer
});