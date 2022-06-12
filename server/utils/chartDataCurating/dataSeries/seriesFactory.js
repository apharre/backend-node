import DataSeriesLaneDirectionClass from './dataSeriesClass.js';

// vehicleType should be inherited
function DataSeriesFactory(lane, direction) {
  /**
   * the Factory method for creating new data series for the chart
   * @param {!options} Object Contains two main parameters, lane and direction for creating the new data series for the chart
   */

  const dataSeries = new DataSeriesLaneDirectionClass(lane, direction);
  // dataSeries.makeLabel();

  return dataSeries;
}
// should always have laneNumber, direction
// vehicleType is optional

export default DataSeriesFactory;
