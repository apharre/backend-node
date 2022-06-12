import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
  type: String,
  direction: Number,
  lane: Number,
  speed: Number,
  count: Number,
  temp: Number,
  date: Number,
  test_time: String,
});

// const VehicleDocument = mongoose.model('i-25-mm-99-test', vehicleSchema);
const VehicleDocument = mongoose.model('vehicledocument', vehicleSchema);

export default VehicleDocument;
