// from vehicleControllers:
// if reqQuery.lane = undefined, still have to check all lanes
// if reqQuery.lane = Object, check if string or

// return object containing lanes, speed, direction

function getApiLaneInfo(apiQuery) {
  /**
   * Takes the raw query information {"date": [gte], "speed": {gte: 5}} and returns an object containing the lanes, directions, and vehicle Types for the dataSeries class
   * @param {!apiQuery} Object {date: { gte: '1', lte: '2' },type: { in: [ 'commuter', 'truck', 'motorcycle' ] },lane: { in: [ '1', '3', '2' ] }, direction: { eq: '1' }
   * @return {Object} {lane: [Arr[int]], direction: [Arr[int]], vehicleType: [Arr[string]]}
   */
  const laneQuery = apiQuery.lane;
  // laneResult
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
