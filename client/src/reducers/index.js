import { combineReducers } from "redux";

import postReducer from "./posts";
import cameraReducer from "./cameras";
// Combine all reducers from all over the app. posts: posts are the same, so keep just the single word
const rootReducer = combineReducers({
  posts: postReducer,
  cameras: cameraReducer,
});

export default rootReducer;
