// from vehicleControllers:
// if reqQuery.lane = undefined, still have to check all lanes
// if reqQuery.lane = Object, check if string or

// return object containing lanes, speed, direction

function getApiLaneInfo(apiQuery) {
  /**
   *
   */
  const laneQuery = apiQuery.lane;
  if (laneQuery) {
    if (typeof laneQuery.in === 'string') {
      return [parseInt(laneQuery.in, 10)]; // array of one number
    }
    const laneNumbers = laneQuery.in.map((laneNum) => Number(laneNum));
    return laneNumbers; // array of numbers
  }
  return []; // means you go through and create a new lane object in your forEach
}

export default getApiLaneInfo;
