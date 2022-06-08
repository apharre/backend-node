import asyncHandler from '../middleware/asyncHandler.js';
import VehicleDocument from '../models/vehicleFormat.js';
// import CreateLineDataSpeed from '../utils/chartDataCurating/speedCuration.js';
import CreateLineDataSpeed from '../utils/chartDataCurating/speedCuration.js';

// eslint-disable-next-line no-unused-vars
const getAllVehicles = asyncHandler(async (req, res, next) => {
  let query;
  // split out request query into attributes
  const reqQuery = { ...req.query };
  const removeFields = ['sort'];
  removeFields.forEach((val) => delete reqQuery[val]);
  // turn the request query object to a string
  let queryStr = JSON.stringify(reqQuery);

  console.log('Req Query', queryStr, '|', reqQuery);

  // add "$" in front of the mongo sorting commands
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|eq|or)\b/g, (match) => `$${match}`);
  // queryStr = queryStr.replace(/"(-{0,1}[0-9]+\.{0,1}[0-9]*)"/g, '$1');
  query = VehicleDocument.find(JSON.parse(queryStr));
  // if (req.query.sort) {
  //   const sortByArr = req.query.sort.split(',');
  //   const sortByStr = sortByArr.join(' ');
  query = query.sort('date');
  const vehicleData = await query;
  // console.log(vehicleData);

  // CREATE THE RETURN DATA FROM THE API CALLS - This should be a Function/Class that includes Factory Methods
  const lineData = new CreateLineDataSpeed(vehicleData, reqQuery);
  // console.log('lineData', lineData);
  const vehicleData2 = lineData.groupByLane();
  console.log('Line data 2', vehicleData2);

  res.status(200).json({
    success: true,
    data: vehicleData,
  });
});

export default getAllVehicles;
