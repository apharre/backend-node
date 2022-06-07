class DataSeries {
  constructor(lane = NaN, direction = NaN) {
    this.lane = lane;
    this.direction = direction;
    this.data = [];
    this.label = '';
    this.result = { label: this.label, data: this.data };
  }

  addToData(xyCoordinates) {
    this.data.push(xyCoordinates);
  }

  getLane() {
    return this.lane;
  }
  // could have one for each lane, in each direction

  // datapoint: x = date, y = speed
  // series: Break up by:
  //    Direction, lane, type?

  // const data = [
  //   {
  //     label: "WB Trucks Lane 1",
  //     data: [[123, 456], [124, 457]]
  //   }
  // ]
}

export default DataSeries;
