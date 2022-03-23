// a reducer is a function that accepts the state and the action/action type
// state must always have a value, so set an initial one (posts = [])
// eslint-disable-next-line default-param-last
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      // coming from /src/actions/posts.js
      // the component that uses this returned data is components/Posts/Posts
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
