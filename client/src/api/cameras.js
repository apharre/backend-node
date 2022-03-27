import axios from "axios";

const url = "http://localhost:5000/cameras";

const fetchCameras = () => {
  return axios.get(url);
};

const fillerFunctionCamera = () => {
  return null;
};

export { fetchCameras, fillerFunctionCamera };
