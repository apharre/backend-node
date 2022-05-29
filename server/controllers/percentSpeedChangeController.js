import asyncHandler from '../middleware/asyncHandler.js';
import PercentSpeedDocument from '../models/percentSpeedFormat.js';
import ErrorResponse from '../utils/errorResponse.js';
import PercentSpeedFunctions from './controllerFunctions/metricsFunctions.js';

// eslint-disable-next-line no-unused-vars
const getAllPercentages = asyncHandler(async (req, res, next) => {
  /**
   * Retrieves all the percentage changes from the vehicledocuments collection in mongoDb
   * @returns {!response} array[map{Name: String, Direction: String, PercentSpeedChange: Number}]
   */
  const percentageData = await PercentSpeedDocument.find();
  const curatedData = [];
  percentageData.forEach((camera) => {
    const cameraSpeedChange = new PercentSpeedFunctions(
      camera.direction,
      camera.name,
      camera.d1_percent_speed_change,
      camera.d2_percent_speed_change
    );

    curatedData.push(
      cameraSpeedChange.brokenDownElement()[0],
      cameraSpeedChange.brokenDownElement()[1]
    );
  });
  curatedData.sort((a, b) =>
    Math.abs(parseFloat(a.percent_speed_change)) < Math.abs(parseFloat(b.percent_speed_change))
      ? 1
      : -1
  );
  res.status(200).json({
    success: true,
    data: curatedData,
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
