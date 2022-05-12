import CameraDocument from '../models/cameraFormat.js';

const getCameras = async (req, res) => {
  try {
    const cameraDocuments = await CameraDocument.find();
    console.log(cameraDocuments);
    res.status(200).json(cameraDocuments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getCameras;
