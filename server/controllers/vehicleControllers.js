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
  // split out request query into attributes
  const reqQuery = { ...req.query };
  const removeFields = ['sort'];
  removeFields.forEach((val) => delete reqQuery[val]);
  // turn the request query object to a string
  let queryStr = JSON.stringify(reqQuery);

  console.log('Req Query', queryStr);

  // add "$" in front of the mongo sorting commands
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|eq|or)\b/g, (match) => `$${match}`);
  // eslint-disable-next-line dot-notation

  // queryStr = queryStr.replace(/"(-{0,1}[0-9]+\.{0,1}[0-9]*)"/g, '$1');
  console.log('parsed', JSON.parse(queryStr));
  console.log('Query String', queryStr);
  // add json object to query string
  query = VehicleDocument.find(JSON.parse(queryStr));
  // if (req.query.sort) {
  //   const sortByArr = req.query.sort.split(',');
  //   const sortByStr = sortByArr.join(' ');
  query = query.sort('date');
  // }
  const vehicleData = await query;
  // console.log(vehicleData);

  res.status(200).json({
    success: true,
    data: vehicleData,
  });
});

export default getAllVehicles;
