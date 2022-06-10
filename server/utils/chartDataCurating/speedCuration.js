class CreateLineDataSpeed {
  /**
   * Takes in the
   * @param {!object} rawData
   * @param {!object} queryRaw
   */
  constructor(rawData, queryRaw) {
    this.rawData = rawData;
    this.queryRaw = queryRaw;
    this.directionQueryInfo = this.queryRaw.direction;
    this.numLanes = this.getApiLaneNumbers();
    this.timeRange = this.setTimeRange();
    this.groupByLane = this.groupByKey('lane', this.rawData);
    this.arrayOfKeys = ['type', 'direction', 'lane'];
    this.returnData = [];
    this.IterationResult = [];
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
    return this.timeRange;
  }

  setTimeRange() {
    return [this.rawData[0].date, this.rawData[this.rawData.length - 1].date];
  }

  // https://www.youtube.com/watch?v=iBGUyPwm_dM
  // sorting by lane, so that can go away
  // groupByKey(key, array) {
  //   /**
  //    * Takes an array of objects and returns an object containing objects that are grouped together by the key name
  //    * @param {!key} String the key of the objects to be grouped
  //    * @param {!array} Array[Object] the
  //    */
  //   // console.log(this.numLanes);
  //   const groupTest = array.reduce((cache, vehicle) => {
  //     let tempLabel = '';
  //     // console.log('newKeyLabel', key, vehicle[key], vehicle.label);
  //     if (vehicle.label === undefined || vehicle.label === null) {
  //       tempLabel = `${key} ${vehicle[key]}`;
  //     } else {
  //       tempLabel = `${key} ${vehicle[key]} ${vehicle.label}`;
  //     }
  //     console.log('newKeyLabel', key, vehicle[key], vehicle.label, '|', tempLabel);

  //     const propertiesToKeep = {
  //       label: `${tempLabel}`,
  //       type: vehicle.type,
  //       lane: vehicle.lane,
  //       direction: vehicle.direction,
  //       speed: vehicle.speed,
  //       date: vehicle.date,
  //     };
  //     const property = vehicle[key];
  //     if (property in cache) {
  //       return {
  //         ...cache,
  //         [property]: cache[tempLabel].concat(propertiesToKeep), // [property]: cache[property].concat(........)
  //       };
  //     }
  //     return {
  //       ...cache,
  //       [tempLabel]: [propertiesToKeep],
  //     };
  //   }, []);
  //   return groupTest;
  // }

  // labelCreation() {
  //   let tempLabel = '';
  //   if (vehicle.label) {
  //     tempLabel = `${key} ${vehicle[key]} ${vehicle.label}`;
  //   } else {
  //     tempLabel = `${key} ${vehicle[key]}`;
  //   }
  // }

  // inputArray = Array of Vehicle Objects
  // groupRecursion(arrayOfKeys, inputArray) {
  // groupRecursion(inputArray, sortingKeyArray, result, counter) {
  //   let currentSortingKey;

  //   if (sortingKeyArray.length > 0) {
  //     currentSortingKey = sortingKeyArray.pop(); // if there are still keys in list,
  //     // console.log(
  //     //   'input type',
  //     //   typeof inputArray[0],
  //     //   this.groupByLane[0],
  //     //   '???',
  //     //   // 'raw data =',
  //     //   // typeof this.rawData[0],
  //     //   counter,
  //     //   currentSortingKey
  //     // );
  //     // input type object undefined ??? typeof raw data[0] = object 0 lane

  //   //   if (typeof inputArray[0] === 'undefined') {
  //   //     // if inputArray[0] is undefined, it is already sorted.
  //   //     // use the for key, value in inputArray
  //   //     // eslint-disable-next-line no-restricted-syntax
  //   //     for (const [key, objectArray] of Object.entries(inputArray)) {
  //   //       // console.log('in-un', currentSortingKey, key, counter, objectArray, result);
  //   //       // const temp = this.groupByKey(currentSortingKey, objectArray);
  //   //       this.groupRecursion(objectArray, sortingKeyArray, result, counter + 1);
  //   //     }
  //   //   } else if (typeof inputArray[0] === 'object') {
  //   //     // if inputArray[0] is an object, it is the raw data
  //   //     const temp = this.groupByKey(currentSortingKey, inputArray);
  //   //     this.groupRecursion(temp, sortingKeyArray, result, counter + 1);
  //   //   }
  //   // } else if (sortingKeyArray.length === 0) {
  //   //   // IF all the keys in the array are gone, that is your base case
  //   //   // push the elements to result and return it
  //   //   console.log('object to add', sortingKeyArray, '|', inputArray);

  //   //   // eslint-disable-next-line no-restricted-syntax
  //   //   for (const [label, data] of Object.entries(inputArray)) {
  //   //     // result.push({ seriesName, seriesDataArray });
  //   //     console.log('appending this', label, data);
  //   //     result.push({ label, data });
  //   //     // for (let [seriesName, seriesDataArray] of Object.entries(inputArray)) {
  //   //     //   result.push({ seriesName, seriesDataArray });
  //   //     //   return result;
  //   //     // }
  //   //   }
  //   }
  //   return result;
  // }

  // iterationMethod() {
  //   const result = [];

  //   this.arrayOfKeys.forEach((keyFilter) => {
  //     const temp = this.groupByKey(keyFilter, this.groupByLane)

  //   })
  // }

  testGroupRecursion() {
    const result = [];
    const counter = 0;
    const firstIteration = this.rawData; // this.groupByLane

    return this.groupRecursion(firstIteration, this.arrayOfKeys, result, counter);
  }

  // https://codereview.stackexchange.com/questions/37028/grouping-elements-in-array-by-multiple-properties
  // testGroupIteration(array, f) {
  //   // for each item in arrayOfKeys, there will be a temporary array
  //   // function groupBy(array, f) {
  //   var groups = {};
  //   array.forEach(function (o) {
  //     var group = JSON.stringify(f(o));
  //     groups[group] = groups[group] || [];
  //     groups[group].push(o);
  //   });
  //   return Object.keys(groups).map(function (group) {
  //     return groups[group];
  //   });
  // }

  // // var result = groupBy(list, function (item) {
  // //   return [item.lastname, item.age];
  // // });
  // testGroupIteration2() {
  //   this.testGroupIteration(this.rawData, function (item) {
  //     return [item.lastname, item.age];
  //   });
  // }

  // return [item.lastname, item.age];
  // groupbyLaneTest() {
  //   const laneTest = this.rawData.groupByToMap((vehicle) => vehicle.date);
  //   return laneTest;
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
