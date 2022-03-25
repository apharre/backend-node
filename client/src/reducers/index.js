import { combineReducers } from "redux";

import posts from "./posts";
// Combine all reducers from all over the app. posts: posts are the same, so keep just the single word
export default combineReducers({
  posts,
});
