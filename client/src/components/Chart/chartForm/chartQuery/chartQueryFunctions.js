class CreateChartDataQuery {
  /**
   * @param {chartFilters} Object contains the parameters in the form in the chart page that will be used to make the API call and retrieve the welected data from mongodb
   */
  constructor(chartFilters) {
    this.chartFilters = chartFilters;
    /** @private @const {!Array<Date>} combinedDates Two dates in unix time, the earlier date is first, the later is second */
    this.combinedDates = this.chartFilters.combinedDates;
    /** @private @const Arr[Number] Two numbers indicating the selected direction for the road. */
    this.queryDirectionSelector = this.chartFilters.queryDirectionSelector;
    /** @private @const bool Wether all vehicles will be included in the query */
    this.boolAllVehicles = this.chartFilters.boolAllVehicles;
    /** @private @const Arr<String> The types of vehicles included in the query */
    this.querySelectedVehicles = this.chartFilters.querySelectedVehicles;
    /** @private @const Bool Wether all speeds will be included in the query */
    this.boolAllSpeeds = this.chartFilters.boolAllSpeeds;
    /** @private @const Arr[Number] The high and low speeds to be included in the query */
    this.querySpeedRange = this.chartFilters.querySpeedRange;
    /** @private @const bool Wether all temperatures will be included in the query */
    this.boolAllTemps = this.chartFilters.boolAllTemps;
    /** @private @const Arr[Number] The types of vehicles to be included in the query */
    this.queryTempRange = this.chartFilters.queryTempRange;
    /** @private @const bool Wether all lanes will be included in the query */
    this.boolAllLanes = this.chartFilters.boolAllLanes;
    /**  @private @const Arr[Number] The lanes to be included in the query */
    this.queryLaneNumbers = this.chartFilters.queryLaneNumbers;

    this.dateQuery = this.setDateQuery();
    this.directionQuery = this.setDirectionQuery();
    this.vehicleTypeQuery = this.setVehicleTypeQuery();
    this.speedQuery = this.setSpeedQuery(); // temp lane
    this.temperatureQuery = this.setTemperatureQuery();
  }

  setDateQuery() {
    /**
     * Returns the query used to narrow down the date for the chart page
     * @return {String} A Mongoose/MongoDB readable query for the dates
     */
    return `date[gte]=${this.combinedDates[0]}&date[lte]=${this.combinedDates[1]}`;
  }

  setDirectionQuery() {
    /**
     * Returns the query used to narrow down the direction for the chart page
     * @return {String} A Mongoose/MongoDB readable query for the directions
     */
    if (
      this.queryDirectionSelector.length >= 2 ||
      !this.queryDirectionSelector.length ||
      this.queryDirectionSelector === "undefined"
    ) {
      return "";
    }
    return `&direction[eq]=${this.queryDirectionSelector[0]}`;
  }

  setVehicleTypeQuery() {
    /**
     * Returns the query used to select vehicle types for the chart page
     * @return {String} A Mongoose/MongoDB readable query for the vehicle types
     */
    if (this.boolAllVehicles) {
      return "";
    }
    const lowerCase = this.querySelectedVehicles.map((type) => {
      return type.toLowerCase();
    });
    let result = "";
    for (let i = 0; i < lowerCase.length; i += 1) {
      result += `&type[in]=${lowerCase[i]}`;
    }
    return result;
  }

  setSpeedQuery() {
    /**
     * Returns the query used to select the speed range for the chart page in the query
     * @return {String} A Mongoose/MongoDB readable query for the speed range
     */
    if (this.boolAllSpeeds) {
      return "";
    }
    const lowSpeedQuery = `speed[gte]=${this.querySpeedRange[0]}`;
    const highSpeed = this.querySpeedRange[1];

    let highSpeedQuery = `&speed[lte]=${highSpeed}`;
    if (highSpeed === 100) {
      highSpeedQuery = "";
    }
    const result = `&${lowSpeedQuery}${highSpeedQuery}`;
    return result;
  }

  setTemperatureQuery() {
    /**
     * Returns the query used to select the temperature range for the chart page
     * @return {String} A Mongoose/MongoDB readable query for the input temperatures
     */
    if (this.boolAllTemps) {
      return "";
    }
    const lowTempQuery = `temp[gte]=${this.queryTempRange[0]}`;
    let highTempQuery = `&temp[lte]=${this.queryTempRange[1]}`;

    if (this.queryTempRange[1] === 120) {
      highTempQuery = "";
    }
    const result = `&${lowTempQuery}${highTempQuery}`;
    return result;
  }

  setLaneQuery() {
    /**
     * Returns the query used to select the lanes for the chart page
     * @return {String} A Mongoose/MongoDB readable query for the input lanes
     */
    if (this.boolAllLanes) {
      return "";
    }
    let result = "";
    for (let i = 0; i < this.queryLaneNumbers.length; i += 1) {
      result += `&lane[in]=${this.queryLaneNumbers[i]}`;
    }
    return result;
  }

  newQuery() {
    /**
     * Combines the different queries in the above functions into a single string for the backend to read
     * @return {String} A Mongoose/MongoDB readable query for the backend
     */
    return `${this.dateQuery}${this.vehicleTypeQuery}${this.speedQuery}${this.temperatureQuery}${this.directionQuery}`;
  }
}

export default CreateChartDataQuery;
