import mongoose from 'mongoose';

const percentSpeedSchema = mongoose.Schema({
  name: String,
  nb_percent_speed_change: Number,
  sb_percent_speed_change: Number,
});

const PercentSpeedDocument = mongoose.model('percent-speed', percentSpeedSchema);

export default PercentSpeedDocument;
