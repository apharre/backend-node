// RIGHT NOW WE CARE ABOUT LANES
// need to pass in lanes.
// if no lanes, all of them.
// for each lane, create a data series for each

// from vehicleControllers:
// if reqQuery.lane = undefined, still have to check all lanes
// if reqQuery.lane = Object, check if string or
// import DataSeriesFactory from './seriesFactory.js';

class CreateLineDataSpeed {
  /**
   *
   * @param {!object} rawData
   * @param {!object} queryRaw
   */
  constructor(rawData, queryRaw) {
    this.rawData = rawData;
    this.queryRaw = queryRaw;
    // this.laneQueryInfo = queryRaw.lanes;
    this.directionQueryInfo = this.queryRaw.direction;
    this.numLanes = this.getApiLaneNumbers();
    this.timeRange = this.getTimeRange();
  }

  getApiLaneNumbers() {
    /**
     * Get the numbers for the lane or lanes in the API call. This will determine how many objects are created later on
     * @return {Array} If empty, all lanes are to be included. If populated, only fetch the data for those lanes
     */
    if (this.queryRaw.lanes) {
      if (typeof this.laneQueryInfo.in === 'string') {
        return [parseInt(this.laneQueryInfo.in, 10)]; // array of one number
      }
      const laneNumbers = this.laneQueryInfo.in.map((laneNum) => Number(laneNum));
      return laneNumbers; // array of numbers
    }
    return []; // means you go through and create a new lane object in your forEach
  }

  getTimeRange() {
    // const minTime = this.rawData[0].date;

    // const maxTime = this.rawData[this.rawData.length - 1].date;
    // return [minTime, maxTime];
    return [this.rawData[0].date, this.rawData[this.rawData.length - 1].date];
  }

  // TODO: figure this out later
  // getApiDirection() {
  //   if (this.directionQueryInfo) {
  //     // if it exists, then only one lane was chosen
  //   }
  // }

  // https://www.youtube.com/watch?v=iBGUyPwm_dM
  groupByLane(key = 'lane') {
    const groupTest = this.rawData.reduce((cache, vehicle) => {
      const property = vehicle[key];
      if (property in cache) {
        return { ...cache, [property]: cache[property].concat(vehicle) };
      }
      return { ...cache, [property]: [vehicle] };
    }, {});

    return groupTest;
  }

  // convertToChartData() {
  // for (const [key, value] of Object.entries(this.groupByLane())) {
  //   console.log(key, value);
  // }
  // }

  // TODO: decide what kind of focus to have later on (lane, direction, type, etc.)
  // generateSeries() {
  //   // array.prototype.groupBy
  //   // const result = groupByCustom('lane', this.rawData);
  //   // return result;
  // }
}

export default CreateLineDataSpeed;

// class DataSeries {
//   constructor(label, data) {
//     this.label = label;
//     this.data = data;
//   }
//   // could have one for each lane, in each direction

//   // datapoint: x = date, y = speed
//   // series: Break up by:
//   //    Direction, lane, type?
// }

// const data = [
//   {
//     label: "WB Trucks Lane 1",
//     data: [[123, 456], [124, 457]]
//   }
// ]

// const axes = React.useMemo(
//     () => [
//       { primary: true, type: "linear", position: "bottom" },
//       { type: "linear", position: "left" },
//     ],
//     []
//   );
