function dateQuery(combinedDates) {
  /**
   * Returns the query used to narrow down the date for the chart page
   * @param {!combinedDates} Arr[Date] Two dates in unix time, the earlier date is first, the later is second
   * @return {String} A Mongoose/MongoDB readable query for the dates
   */
  return `date[gte]=${combinedDates[0]}&date[lte]=${combinedDates[1]}`;
}

function directionQuery(queryDirectionSelector) {
  /**
   * Returns the query used to narrow down the direction for the chart page
   * @param {!queryDirectionSelector} Arr[Number] Two numbers indicating the selected direction for the road.
   * @return {String} A Mongoose/MongoDB readable query for the directions
   */
  if (queryDirectionSelector.length >= 2 || !queryDirectionSelector.length) {
    return "";
  }
  return `&direction[eq]=${queryDirectionSelector[0]}`;
}

function vehicleTypeQuery(boolAllVehicles, querySelectedVehicles) {
  /**
   * Returns the query used to select vehicle types for the chart page
   * @param {!boolAllVehicles} bool Wether all vehicles will be included in the query
   * @param {!querySelectedVehicles} Arr[str] The types of vehicles included in the query
   * @return {String} A Mongoose/MongoDB readable query for the vehicle types
   */
  if (boolAllVehicles) {
    return "";
  }
  const lowerCase = querySelectedVehicles.map((type) => {
    return type.toLowerCase();
  });
  let result = "";
  for (let i = 0; i < lowerCase.length; i += 1) {
    result += `&type[in]=${lowerCase[i]}`;
  }
  return result;
}

function speedQuery(boolAllSpeeds, querySpeedRange) {
  /**
   * Returns the query used to select the speed range for the chart page
   * @param {!boolAllSpeeds} bool Wether all speeds will be included in the query
   * @param {!querySpeedRange} Arr[Number] The high and low speeds to be included in the query
   * @return {String} A Mongoose/MongoDB readable query for the speed range
   */
  if (boolAllSpeeds) {
    return "";
  }
  const lowSpeedQuery = `speed[gte]=${querySpeedRange[0]}`;
  const highSpeed = querySpeedRange[1];

  let highSpeedQuery = `&speed[lte]=${highSpeed}`;
  if (highSpeed === 100) {
    highSpeedQuery = "";
  }
  const result = `&${lowSpeedQuery}${highSpeedQuery}`;
  return result;
}

function temperatureQuery(boolAllTemps, queryTempRange) {
  /**
   * Returns the query used to select the temperature range for the chart page
   * @param {!boolAllTemps} bool Wether all temperatures will be included in the query
   * @param {!queryTempRange} Arr[Number] The types of vehicles to be included in the query
   * @return {String} A Mongoose/MongoDB readable query for the input temperatures
   */
  if (boolAllTemps) {
    return "";
  }
  const lowTempQuery = `temp[gte]=${queryTempRange[0]}`;
  let highTempQuery = `&temp[lte]=${queryTempRange[1]}`;

  if (queryTempRange[1] === 120) {
    highTempQuery = "";
  }
  const result = `&${lowTempQuery}${highTempQuery}`;
  return result;
}

function laneQuery(boolAllLanes, queryLaneNumbers) {
  /**
   * Returns the query used to select the lanes for the chart page
   * @param {!boolAllLanes} bool Wether all lanes will be included in the query
   * @param {!queryLaneNumbers} Arr[Number] The lanes to be included in the query
   * @return {String} A Mongoose/MongoDB readable query for the input lanes
   */
  if (boolAllLanes) {
    return "";
  }
  let result = "";
  for (let i = 0; i < queryLaneNumbers.length; i += 1) {
    result += `&lane[in]=${queryLaneNumbers[i]}`;
  }
  return result;
}

function newQuery(chartFilters) {
  /**
   * Combines the different queries in the above functions into a single string for the backend to read
   * @param {!chartFilters} Object{ Array[str] | Array[Number] | Number | bool} The ChartFilters object that contains the parameters from the chart page form
   * @return {String} A Mongoose/MongoDB readable query for the backend
   */
  const newDQ = dateQuery(chartFilters.combinedDates);
  const newDirectQ = directionQuery(chartFilters.queryDirectionSelector);
  const newVQ = vehicleTypeQuery(
    chartFilters.boolAllVehicles,
    chartFilters.querySelectedVehicles
  );
  const newSQ = speedQuery(
    chartFilters.boolAllSpeeds,
    chartFilters.querySpeedRange
  );
  const newTQ = temperatureQuery(
    chartFilters.boolAllTemps,
    chartFilters.queryTempRange
  );
  const newLQ = laneQuery(
    chartFilters.boolAllLanes,
    chartFilters.queryLaneNumbers
  );
  return `${newDQ}${newVQ}${newSQ}${newTQ}${newLQ}${newDirectQ}`;
}

export default newQuery;
