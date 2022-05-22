/* eslint-disable no-unused-vars */
function returnQuery(variable, min, max) {
  return `${variable}[gte]=${min}&${variable}[lte]${max}&`;
}

function chartQueryBuilder(
  currentCamera,
  date,
  vehicleType,
  lane,
  speed,
  temp
) {
  // var vehicleQuery = "?";
  let vehicleQuery = "";
  let laneQuery = "";
  let timeQuery = "";
  let speedQuery = "";
  let tempQuery = "";
  if (lane !== "All") {
    laneQuery = `lane[eq]=${lane}&`;
  }
  if (vehicleType !== "All") {
    vehicleQuery = `type[eq]=${vehicleType}&`;
  }
  // ["All", "0-50", "50-60", "60-70", "70+"]
  switch (speed) {
    case "0-50":
      speedQuery = `speed[gte]=${0}&speed[lte]=${50}&`;
      break;
    case "50-60":
      speedQuery = `speed[gte]=${50}&speed[lte]=${60}&`;
      break;
    case "60-70":
      speedQuery = `speed[gte]=${60}&speed[lte]=${70}&`;
      break;
    case "70+":
      speedQuery = `speed[gte]=${70}&`;
      break;
    default:
      break;
  }

  // const tempOptions = ["All", "0-32", "32-50", "50-60", "60-70", "70-80", "80+"];

  // TODO: date,
  // SAVE DATE FOR LAST
  // const timeOptions = ["Past Hour", "Past Day", "Past Week", "Past Month"];
  const currentTime = Math.round(new Date().getTime() / 1000);
  switch (date) {
    case "Past Hour":
      timeQuery = `date[gte]=${currentTime - 3600}&`;
      break;
    case "Past Day":
      timeQuery = `date[gte]=${currentTime - 86400}&`;
      break;
    case "Past Week":
      timeQuery = `date[gte]=${currentTime - 604800}&`;
      break;
    case "Past Month":
      // 30.44 days
      timeQuery = `date[gte]=${currentTime - 2629743}&`;
      break;
    default:
      break;
  }

  switch (temp) {
    case "0-32":
      tempQuery = returnQuery(temp, 0, 32); // `temp[gte]=${0}&temp[lte]${50}&`;
      break;
    case "32-60":
      tempQuery = `temp[gte]=${32}&temp[lte]=${60}`;
      break;
    case "60-80":
      tempQuery = `temp[gte]=${60}&temp[lte]=${80}`;
      break;
    case "70-90":
      tempQuery = `temp[gte]=${70}&temp[lte]=${90}`;
      break;
    case "80-100":
      tempQuery = `temp[gte]=${80}&temp[lte]=${100}`;
      break;
    default:
      break;
  }
  // TODO: HARDCODING CAMERA COLLECTIONS
  const result = `?${timeQuery}${vehicleQuery}${laneQuery}${speedQuery}${tempQuery}`;
  console.log(result);
  return result;

  // return `?${timeQuery}${vehicleQuery}${laneQuery}${speedQuery}${tempQuery}`;
}

export default chartQueryBuilder;
