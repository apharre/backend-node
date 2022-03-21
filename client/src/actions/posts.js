// uses the index.js file in src/api/index
// Part 1 50:53
// import { FETCH_ALL } from '../components/'

// THIS LINE IS SORT OF BROKEN
// import * as API from "../api/index";
import fetchPosts from "../api/index";

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
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

// then go to src/reducers/posts to handle the logic of fetchin the posts
export default getPosts;
