import axios from "axios";

const cameraUrl = "http://localhost:5000/cameras";

const fetchCameras = () => {
  return axios.get(cameraUrl);
};

const fillerFunctionCamera = () => {
  return null;
};

export { fetchCameras, fillerFunctionCamera };
