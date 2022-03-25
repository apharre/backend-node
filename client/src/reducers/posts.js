// a reducer is a function that accepts the state and the action/action type
// state must always have a value, so set an initial one (posts = [])
// eslint-disable-next-line default-param-last
export default (posts = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return posts.map((post) => {
        // eslint-disable-next-line no-underscore-dangle
        if (post._id === action.payload._id) {
          // if the id matches the updated post, return the updated post. Otherwise, return the post as it was with no updates
          return action.payload;
        }
        return post;
      });
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
