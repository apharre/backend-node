// import { applyMiddleware } from "redux";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../api/index";
import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

// Action creators - functions that return actions
// action - an object that has a type and a payload
// async(dispatch) allows for asynch action

const getPosts = () => async (dispatch) => {
  try {
    // part 1 54:25
    // returning data from database, will have to allow time for payload to be returned. { data } destructures the data
    // instead of returning action, we dispatch it

    // THIS LINE IS BROKEN
    // const { data } = await API.fetchPosts();
    const { data } = await fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

const createPostAction = (post) => async (dispatch) => {
  try {
    // sending a "post" object using the API
    // const { data } = await API.createPost(post);
    const { ...data } = await createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const updatePostAction = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePost(id, post);
    // Redux types set as action types ("UPDATE")
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const deletePostAction = (id) => async (dispatch) => {
  try {
    // do not need the response from this action, so don't need 'const response = deletePost(id);'
    await deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

const likePostAction = (id) => async (dispatch) => {
  try {
    // don't need (id, post) because we don't have to provide what we are doing with the post
    const { ...data } = await likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// then go to src/reducers/posts to handle the logic of fetching the posts
export {
  getPosts,
  createPostAction,
  updatePostAction,
  deletePostAction,
  likePostAction,
};
