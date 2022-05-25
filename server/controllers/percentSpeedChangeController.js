import asyncHandler from '../middleware/asyncHandler.js';
// import percentSpeedChangeDocument from '../models/percentSpeedFormat';

const getAllPercentages = asyncHandler(async (req, res) => {
  res.send('Get All Percentage Routes');
});

const createNewPercentage = asyncHandler(async (req, res) => {
  res.send('Create New Percentage Route');
});

const updatePercentage = asyncHandler(async (req, res) => {
  res.send('Update New Percentage Route');
});

const deletePercentage = asyncHandler(async (req, res) => {
  res.send('Update New Percentage Route');
});

export { getAllPercentages, createNewPercentage, updatePercentage, deletePercentage };
