import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";
import commentsReducer from "./comments/reducer";

export default combineReducers({ usersReducer, postsReducer, postReducer, userReducer, commentsReducer });