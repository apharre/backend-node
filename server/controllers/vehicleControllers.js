import asyncHandler from '../middleware/asyncHandler.js';
import VehicleDocument from '../models/vehicleFormat.js';
import GroupVehiclesTogether from '../utils/chartDataCurating/groupingClass.js';
// import CreateLineDataSpeed from '../utils/chartDataCurating/speedCuration.js';

// TODO: THIS COULD BE A CLASS OR UTILITY LATER
function queryCleanupToString(query) {
  /**
   * Takes in the request query and adds characters to make it MongoDB readable.
   * JSON.stringify turns the request query object to a string
   * The Regex adds "$" in front of the mongo sorting commands
   * @param {!query} Object the query attached to the request from the charts page. MUST BE DESTRUCTURED
   * @return {String} A stringified JSON object that will be passed to the MongoDB backend
   */

  const reqQuery = { ...query };
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|eq|or)\b/g, (match) => `$${match}`);
  // could be used to remove quotes around the numbers in the query
  // queryStr = queryStr.replace(/"(-{0,1}[0-9]+\.{0,1}[0-9]*)"/g, '$1');

  return queryStr;
}

// eslint-disable-next-line no-unused-vars
const getAllVehicles = asyncHandler(async (req, res, next) => {
  let query;
  const queryStr = queryCleanupToString(req.query);

  query = VehicleDocument.find(JSON.parse(queryStr));

  query = query.sort('date');
  const vehicleData = await query;
  // console.log('RAW API RESPONSE', vehicleData.slice(0, 2));
  console.log('query', queryStr);

  const result = new GroupVehiclesTogether(vehicleData, req.query);
  console.log('grouped', result.groupedNestedObject, '\n');

  console.log('level1', result.firstLevelKeys, '\n');
  console.log('level2', result.secondLevelKeys);
  console.log('level3', result.thirdLevelkeys);
  result.getLabelCategories();

  // pass in your object structure as array elements
  // const getNestedObject = (nestedObj, pathArr) =>
  //   pathArr.reduce(
  //     (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
  //     nestedObj
  //   );
  // const name = getNestedObject(result.groupedNestedObject, ['commuter', '0']);
  // console.log('name', name);

  res.status(200).json({
    success: true,
    data: vehicleData,
  });
});

export default getAllVehicles;
