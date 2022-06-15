import GroupVehiclesTogether from './groupingClass.js';

function groupingClassFactory(rawVehicleData, rawQuery) {
  /**
   * Factory method for the class that takes in the raw vehicle data and then breaks it out into the different categories for the chart page
   * @param {!rawVehicleData} Object the data that comes back from the MongoDB query
   * @param {!rawQuery} Object the query that is used to make the mongoDbQuery. Pulled from the vehicleControllers file.
   */
  const groupedVehicles = new GroupVehiclesTogether(rawVehicleData, rawQuery);
  return groupedVehicles.getLabelCategories();
}

export default groupingClassFactory;
