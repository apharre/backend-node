import mongoose from 'mongoose';

const percentSpeedSchema = new mongoose.Schema({
  name: String,
  nb_percent_speed_change: Number,
  sb_percent_speed_change: Number,
});

// model name should be plural (percent-speed-table-datas)
const PercentSpeedDocument = mongoose.model('percent-speed-table-data', percentSpeedSchema);

export default PercentSpeedDocument;
