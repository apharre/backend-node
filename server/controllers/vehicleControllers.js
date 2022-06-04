import asyncHandler from '../middleware/asyncHandler.js';
import VehicleDocument from '../models/vehicleFormat.js';

// eslint-disable-next-line no-unused-vars
const getAllVehicles = asyncHandler(async (req, res, next) => {
  // let query;

  // const reqQuery = { ...req.query };
  // // {price: {lte: '900'}, sort: "-price" }
  // // const removeFields = ['sort'];
  // // removeFields.forEach((val) => delete reqQuery[val]);
  // let queryStr = JSON.stringify(reqQuery);
  // // add a $ in front of each mongo operator for the mongoDB query
  // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
  // // console.log(queryStr);
  // query = VehicleDocument.find(JSON.parse(queryStr)).sort({ date: 1 });

  // // 1:10:40 https://www.youtube.com/watch?v=3t_PXFa7i8Q
  // if (req.query.sort) {
  //   const sortByArr = req.query.sort.split(',');
  //   const sortByStr = sortByArr.join(' ');
  //   query = query.sort(sortByStr);
  // }

  // // const vehicleDocuments = await VehicleDocument.find(JSON.parse(queryStr));
  // const vehicleDocuments = await query;
  /**
   * _________________________________________________________________
   */
  let query;
  const reqQuery = { ...req.query }; // split out request query into attributes
  const removeFields = ['sort'];
  removeFields.forEach((val) => delete reqQuery[val]);
  let queryStr = JSON.stringify(reqQuery); // turn the request query object to a string
  console.log('vehicle Controller', queryStr);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|eq|or)\b/g, (match) => `$${match}`); // add "$" in front of the mongo sorting commands
  // queryStr = JSON.parse(queryStr);
  console.log('Un-stringified', queryStr);
  /**
   * date, type, speed, temp, lane, direction
   */

  query = VehicleDocument.find(JSON.parse(queryStr)); // add json object to query string
  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',');
    const sortByStr = sortByArr.join(' ');
    query = query.sort(sortByStr);
    console.log('if');
  }
  // } else {
  //   console.log('else');
  //   query = query.sort('date');
  // }

  const vehicleData = await query;

  console.log(reqQuery, '|||', queryStr, '|||');
  // const vehicleDocuments = await VehicleDocument.find({ speed: { $gte: 60 } });

  res.status(200).json({
    success: true,
    data: vehicleData,
  });
});

// // export { getAllVehicles };
export default getAllVehicles;
