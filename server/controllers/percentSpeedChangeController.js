import asyncHandler from '../middleware/asyncHandler.js';
import PercentSpeedDocument from '../models/percentSpeedFormat.js';
import ErrorResponse from '../utils/errorResponse.js';

// eslint-disable-next-line no-unused-vars
const getAllPercentages = asyncHandler(async (req, res, next) => {
  // res.send('Get All Percentage Routes');
  // try {
  //   const percentSpeedDocuments = await PercentSpeedDocument.find();
  //   console.log(percentSpeedDocuments);
  //   res.status(200).json({ success: true, data: percentSpeedDocuments });
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
  const percentageData = await PercentSpeedDocument.find();
  res.status(200).json({
    success: true,
    data: percentageData,
  });
});

// eslint-disable-next-line no-unused-vars
const createNewPercentage = asyncHandler(async (req, res, next) => {
  // res.send('Create New Percentage Route');
  const newMetricData = await PercentSpeedDocument.create(req.body);

  res.status(201).json({
    success: true,
    data: newMetricData,
  });
});

// eslint-disable-next-line consistent-return
const updatePercentageById = asyncHandler(async (req, res, next) => {
  let newMetric = await PercentSpeedDocument.findById(req.params.id);

  if (!newMetric) {
    return next(new ErrorResponse(`Camera with id ${req.params.id} was not found`, 404));
  }

  newMetric = await PercentSpeedDocument.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    success: true,
    data: newMetric,
  });
});

// eslint-disable-next-line no-unused-vars
const deletePercentage = asyncHandler(async (req, res, next) => {
  res.send('Delete New Percentage Route');
});

export { getAllPercentages, createNewPercentage, updatePercentageById, deletePercentage };
