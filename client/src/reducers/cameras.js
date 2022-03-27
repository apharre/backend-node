import { FETCH_ALL, UPDATE } from "../constants/actionTypes";

// eslint-disable-next-line default-param-last
export default (cameras = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return action.payload;

    default:
      return cameras;
  }
};
