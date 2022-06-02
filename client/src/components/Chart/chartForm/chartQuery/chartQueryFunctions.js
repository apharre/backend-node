// class ChartQueryCreator {
//   constructor({ ...chartFilters }) {
//     this.dates = chartFilters.combinedDates;
//     this.
//   }
// }

function speedQuery(boolAllSpeeds) {
  // }, querySpeedRange) {
  if (boolAllSpeeds) {
    return "";
  }
  // const lowSpeedQuery = `speed[gte]=${querySpeedRange[0]}`;
  // const highSpeed = querySpeedRange[1];

  // let highSpeedQuery = `&speed[lte]=${highSpeed}`;
  // if (highSpeed === 100) {
  //   highSpeedQuery = "";
  // }
  return "lowSpeedQuery"; // `${lowSpeedQuery}${highSpeedQuery}`;
}

function chartQueryCreator(chartFilters) {
  const ex = { ...chartFilters }; // expanded

  // const dates = ex.combinedDates;
  // const

  console.log("CHART QUERY FUNCTION", ex, ex.combinedDates);

  console.log("DID IT WORK", ex.combinedDates[0]);

  // const firstDate = Math.floor(chartFilters.combinedDates.getTime() / 1000);
  // console.log(firstDate);

  /**
   * combinedDates: dateValue,
      boolAllSpeeds: allSpeeds,
      querySpeedRange: speedRange,
      boolAllTemps: allTemps,
      queryTempRange: tempRange,
      boolAllLanes: allLanes,
      queryLaneNumbers: laneNumbers,
      boolAllVehicles: allVehicles,
      querySelectedVehicles: selectedVehicles,
   */

  /**
   *   const [dateValue, setDateValue] = useState([oneDayAgo, todayNow]);
  const [firstDayTime, setFirstDayTime] = useState(oneDayAgo);
  const [laneNumbers, setLaneNumbers] = useState([1, 2, 3, 4]);
  const [secondDayTime, setSecondDayTime] = useState(todayNow);
  const [selectedVehicles, setSelectedVehicles] = useState([
    "Commuter",
    "Truck",
    "Bus",
    "Motorcycle",
  ]);
  const [speedRange, setSpeedRange] = useState([25, 75]);
  const [tempRange, setTempRange] = useState([0, 100]);

  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);
  const [allLanes, setAllLanes] = useState(true);
   */
  console.log(
    ex.boolAllSpeeds,
    ex.querySpeedRange,
    ex.querySpeedRange[0],
    ex.querySpeedRange[1]
  );
  const speedQueryText = speedQuery(ex.boolAllSpeeds, ex.querySpeedRange);
  console.log("SPEED QUERY", speedQueryText);
  return speedQueryText;
}

export default chartQueryCreator;
