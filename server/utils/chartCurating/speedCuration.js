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

// RIGHT NOW WE CARE ABOUT LANES
// need to pass in lanes.
// if no lanes, all of them.
// for each lane, create a data series for each

// from vehicleControllers:
// if reqQuery.lane = undefined, still have to check all lanes
// if reqQuery.lane = Object, check if string or
import DataSeries from './dataSeriesClass.js';

class CreateLineDataSpeed {
  /**
   *
   * @param {!object} rawData
   * @param {!object} queryRaw
   */
  constructor(rawData, queryRaw) {
    this.rawData = rawData;
    this.queryRaw = queryRaw;
    this.laneQueryInfo = queryRaw.lanes;
    this.curatedData = [];
  }

  getApiLaneNumbers() {
    if (this.laneQueryInfo) {
      if (typeof this.laneQueryInfo.in === 'string') {
        return [parseInt(this.laneQueryInfo.in, 10)]; // array of one number
      }
      const laneNumbers = this.laneQueryInfo.in.map((laneNum) => Number(laneNum));
      return laneNumbers; // array of numbers
    }
    return []; // means you go through and create a new lane object in your forEach
  }

  static checkIfListContains(laneNumber, list) {
    /**
     * checks if the object for that lane number exists in the input list
     * @param {!laneNumber} the lane number to check
     */
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].getLane === laneNumber) {
        return true;
      }
    }
    return false;
  }

  generateSeries() {
    const laneNumbers = this.getApiLaneNumbers();
    const result = [];
    if (!laneNumbers) {
      this.rawData.forEach((vehicle) => {
        // do something. sort into lanes
        // if lane == 1 &&
        // [date, speed]
        if (this.checkIfListContains(vehicle.lane, result)) {
          // if that lane already exists, add to it
        } else {
          // create new object
          result.push(new DataSeries(vehicle.lane, vehicle.direction));
          // eval(`Lane${vehicle.lane}Series = new DataSeries(vehicle.lane, vehicle.direction)`);
        }
      });
    } else {
      laneNumbers.forEach((laneNumber) => {
        `Lane${laneNumber}Series` = new DataSeries(laneNumber);
      })

    }


    console.log('generateSeries result', result);
    return result;
  }

  // newSeries() {
  //   // if no lane numbers, forEach
  //   // Otherwise, create series for all vehicle Types in each lane

  // }
}

export default CreateLineDataSpeed;
