import mongoose from 'mongoose';

const cameraSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  coll: String,
});

const CameraDocument = mongoose.model('active-camera', cameraSchema);

export default CameraDocument;
