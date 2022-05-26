import mongoose from 'mongoose';

const percentSpeedSchema = new mongoose.Schema({
  name: String,
  d1_percent_speed_change: Number,
  d2_percent_speed_change: Number,
  direction: Number,
});

// model name should be plural (percent-speed-table-datas)
const PercentSpeedDocument = mongoose.model('percent-speed-table-data', percentSpeedSchema);

export default PercentSpeedDocument;
