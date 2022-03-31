import asyncHandler from '../middleware/asyncHandler.js';
import VehicleDocument from '../models/vehicleFormat.js';

// eslint-disable-next-line no-unused-vars
const getAllVehicles = asyncHandler(async (req, res, next) => {
  let query;

  const reqQuery = { ...req.query };
  // {price: {lte: '900'}, sort: "-price" }
  // const removeFields = ['sort'];
  // removeFields.forEach((val) => delete reqQuery[val]);
  let queryStr = JSON.stringify(reqQuery);
  // add a $ in front of each mongo operator for the mongoDB query
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
  console.log(queryStr);
  query = VehicleDocument.find(JSON.parse(queryStr)).sort({ date: 1 });

  // 1:10:40 https://www.youtube.com/watch?v=3t_PXFa7i8Q
  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',');
    const sortByStr = sortByArr.join(' ');
    query = query.sort(sortByStr);
  }
  // console.log(query);
  // else {
  //   query = query.sort('-price')
  // }
  // const vehicleDocuments = await VehicleDocument.find(JSON.parse(queryStr));
  const vehicleDocuments = await query;

  res.status(200).json({
    success: true,
    data: vehicleDocuments,
  });
});

// // export { getAllVehicles };
export default getAllVehicles;
