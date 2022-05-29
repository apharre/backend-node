import React from "react";
import { TimeInput } from "@mantine/dates";
// import { func } from "prop-types";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ordinalSuffixes(i) {
  /**
   * returns the suffix for numbers to be written (3"rd", 2"nd")
   */
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}

function displayDate(dateValue, isFirstDate) {
  let sameYear = false;
  let year;
  let month;
  let date;
  let ordinal;
  // console.log(dateValue);
  if (dateValue[1] !== null) {
    if (dateValue[0].getFullYear() === dateValue[1].getFullYear()) {
      sameYear = true;
    }

    year = dateValue[isFirstDate].getFullYear();
    month = monthNames[dateValue[isFirstDate].getMonth()];
    date = dateValue[isFirstDate].getDate();

    ordinal = ordinalSuffixes(date);
  }
  if (sameYear === true) {
    return `${month} ${date}${ordinal}`;
  }
  return `${month} ${date}${ordinal}, ${year}`;
}

// eslint-disable-next-line react/prop-types
function TimeInputSelector({ dateValue, isFirstDate }) {
  /**
   * Performs some of the calculations to display the correct date for the time input label
   * @param {!defaultValue} DateObj The default value that is displayed above the time input box
   * @param {!dateValue} DateObj the array containing the two different dates for choosing the time to restrict the query by
   * @param {!isFirstDate} int A "0" or "1" used to determine the index of the dateValue list
   */

  const dateForLabel = displayDate(dateValue, isFirstDate);

  return (
    <TimeInput
      defaultValue={dateValue[isFirstDate]}
      label={`${dateForLabel} Time`}
      variant="filled"
      radius="md"
      format="12"
      pt="1rem"
      px="1rem"
    />
  );
}

export default TimeInputSelector;
