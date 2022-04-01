import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionTypes";

// a reducer is a function that accepts the state and the action/action type
// state must always have a value, so set an initial empty one (posts = [])
// eslint-disable-next-line default-param-last
// export default (posts = [], action) => {
//   switch (action.type) {
//     case CREATE:
//       return [...posts, action.payload];
//     case DELETE:
//       // keep all the posts except for the one that has the _id in their payload
//       // eslint-disable-next-line no-underscore-dangle
//       return posts.filter((post) => post._id !== action.payload);
//     case FETCH_ALL:
//       // coming from /src/actions/posts.js
//       // the component that uses this returned data is components/Posts/Posts
//       return action.payload;
//     case UPDATE:
//     case LIKE:
//       return posts.map((post) => {
//         if (post._id === action.payload._id) {
//           // if the id matches the updated post, return the updated post. Otherwise, return the post as it was with no updates
//           return action.payload;
//         }
//         return post;
//       });

//     default:
//       return posts;
//   }
// };

// eslint-disable-next-line default-param-last
const postReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      // keep all the posts except for the one that has the _id in their payload
      // eslint-disable-next-line no-underscore-dangle
      return state.filter((post) => post._id !== action.payload);
    case FETCH_ALL:
      // coming from /src/actions/posts.js
      // the component that uses this returned data is components/Posts/Posts
      return action.payload;
    case UPDATE:
    case LIKE:
      return state.map((post) => {
        if (post._id === action.payload._id) {
          // if the id matches the updated post, return the updated post. Otherwise, return the post as it was with no updates
          return action.payload;
        }
        return post;
      });

    default:
      return state;
  }
};

export default postReducer;
