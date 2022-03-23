import { fetchPosts, createPost } from "../api/index";

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

const createPostAction = (post) => async (dispatch) => {
  try {
    // sending a "post" object using the API
    // const { data } = await API.createPost(post);
    const { ...data } = await createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// then go to src/reducers/posts to handle the logic of fetchin the posts
export { getPosts, createPostAction };
