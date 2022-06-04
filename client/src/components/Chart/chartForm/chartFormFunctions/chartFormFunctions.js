/* ____________________ Date and Time Functions ____________________ */
function extractDate(date) {
  /**
   * Takes a single date value and returns the date as a string
   * @param {!date} Date A date formatted object
   * @return {!str} The stringified date in the format year-month-day (2022-12-25)
   */
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function combineDateAndTimes(dateValue, firstDayTime, secondDayTime) {
  /**
   * Takes the input dates from an array and two separate times and combines them into an array of Unix Time variables
   * @param {!dateValue} Arr[Date] an array containing two dates, the beginning and ending date set by the user
   * @param {!firstDayTime} Date a full date object from which the time will be extracted
   * @param {!secondDayTime} Date a full date object from which the time will be extracted
   * @return {Arr[int]} an array containig two date objects that have been combined and now are in Unix time for the
   * API query. The "/ 1000" is to convert to seconds from miliseconds
   */
  const firstTime = `${firstDayTime.getHours()}:${firstDayTime.getMinutes()}:00`;
  const secondTime = `${secondDayTime.getHours()}:${secondDayTime.getMinutes()}:00`;
  const firstDate = extractDate(dateValue[0]);
  const secondDate = extractDate(dateValue[1]);

  return [
    Date.parse(`${firstDate} ${firstTime}`) / 1000,
    Date.parse(`${secondDate} ${secondTime}`) / 1000,
  ];
}

/* ____________________ Speed Functions ____________________ */
// function allSpeedSubmittal(allSpeeds, speedRange) {}

/* ____________________ Direction Functions ____________________ */
// Add Direction logic here later on (North/South)

export default combineDateAndTimes;
