/**
 * Creates the query for the chart page by taking the inputs from the chart form on the left and converting it into a Mongo-readable query
 */
class ChartQuery {
  /**
   * @param {*object} chartFilters the object passed when the submit button is clicked
   * @param chartFilters
   */
  constructor({ ...chartFilters }) {
    // this.chartFilters = chartFilters;
    this.combinedDates = chartFilters.combinedDates;

    this.boolAllVehicles = chartFilters.boolAllVehicles;
    this.boolAllSpeeds = chartFilters.boolAllSpeeds;
    this.boolAllTemps = chartFilters.boolAllTemps;
    this.boolAllLanes = chartFilters.boolAllLanes;

    this.querySpeedRange = chartFilters.querySpeedRange;
    this.queryTempRange = chartFilters.tempRange;
    this.queryLaneNumbers = chartFilters.queryLaneNumbers;
    this.querySelectedVehicles = chartFilters.querySelectedVehicles;
  }

  test() {
    console.log(
      "Object Chart Filters",
      this.chartFilters,
      this.boolAllVehicles
    );
  }

  dateQuery() {
    return `date{gte]=${this.combinedDates[0]}&date[lte]=${this.combinedDates[1]}`;
  }

  vehicleTypeQuery() {
    if (this.boolAllVehicles) {
      return "";
    }
    console.log("inside vehicle", this.querySelectedVehicles);
    const result = `type[eq]=[${this.querySelectedVehicles}]`;
    return result;
  }

  speedQuery() {
    if (this.boolAllSpeeds) {
      return "";
    }
    const lowSpeedQuery = `speed[gte]=${this.querySpeedRange[0]}`;
    const highSpeed = this.querySpeedRange[1];

    let highSpeedQuery = `&speed[lte]=${highSpeed}`;
    if (highSpeed === 100) {
      highSpeedQuery = "";
    }
    const result = `${lowSpeedQuery}${highSpeedQuery}`;
    return result;
  }

  temperatureQuery() {
    if (this.boolAllTemps) {
      return "";
    }
    const lowTempQuery = `temp[gte]=${this.queryTempRange[0]}`;
    let highTempQuery = `&temp[lte]=${this.queryTempRange[1]}`;
    if (this.queryTempRange[1] === 120) {
      highTempQuery = "";
    }
    const result = `${lowTempQuery}${highTempQuery}`;
    return result;
  }

  laneQuery() {
    if (this.boolAllLanes) {
      return "";
    }
    const result = `lane[eq]=[${this.querySelectedVehicles}]`;
    return result;
  }

  static addAmpersand(nextFunction) {
    if (nextFunction !== "") {
      return `&${nextFunction}`;
    }
    return nextFunction;
  }

  // TODO: combine the queries
  newQuery() {
    return `${this.dateQuery()}`;
  }
}

export default ChartQuery;
