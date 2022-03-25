import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
  type: String,
  lane: Number,
  speed: Number,
  count: Number,
  temp: Number,
  date: Date,
});

const VehicleDocument = mongoose.model('vehicleDocument', vehicleSchema);

export default VehicleDocument;
