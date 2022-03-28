import { FETCH_ALL } from "../constants/actionTypes";

// eslint-disable-next-line default-param-last
const cameraReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return state;
  }
};

export default cameraReducer;
