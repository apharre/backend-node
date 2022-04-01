import { fetchCameras } from "../api/index";
import { FETCH_ALL } from "../constants/actionTypes";

const getAllCameras = () => async (dispatch) => {
  try {
    const { data } = await fetchCameras();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export default getAllCameras;
