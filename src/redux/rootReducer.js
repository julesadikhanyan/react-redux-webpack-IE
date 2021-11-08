import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";

export default combineReducers({ usersReducer, postsReducer });