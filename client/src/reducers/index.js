import { combineReducers } from "redux";

import posts from "./posts";
import cameras from "./cameras";
// Combine all reducers from all over the app. posts: posts are the same, so keep just the single word
export default combineReducers({
  posts,
  cameras,
});
