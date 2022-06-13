class DataSeriesLaneDirectionClass {
  constructor(seriesLabel, seriesData) {
    this.seriesLabel = seriesLabel;
    this.seriesData = seriesData;
    // this.lane = laneNumber;
    // this.direction = direction; // 1 or 0
    // this.vehicleType = vehicleType;
    this.verified = this.verifyData();
    // this.data = []; // return this
    // this.label = this.makeLabel();
    // this.result = { label: this.label, data: this.data };
  }

  verifyData() {
    console.log('Label:', this.seriesLabel);
    console.log('Data:', this.seriesData);
    return true;
  }

  // getLane() {
  //   return this.lane;
  // }

  // setLane(laneName) {
  //   this.lane = laneName;
  // }

  // getDirection() {
  //   return this.direction;
  // }

  // setDirection(directionType) {
  //   this.direction = directionType;
  // }

  // getData() {
  //   return this.data;
  // }

  // addToData(xyCoordinates) {
  //   this.data.push(xyCoordinates);
  // }

  // getLabel() {
  //   return this.label;
  // }

  // setLabel(labelName) {
  //   this.label = labelName;
  // }

  // makeLabel() {
  //   // maybe make it "NB" instead of "Northbound"
  //   const newLabel = `${this.direction}bound Lane ${this.lane}`;
  //   this.setLabel(newLabel);
  // }

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

export default DataSeriesLaneDirectionClass;
