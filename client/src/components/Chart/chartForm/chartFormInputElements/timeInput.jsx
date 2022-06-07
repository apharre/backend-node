/* eslint-disable react/prop-types */
import React from "react";
import { TimeInput } from "@mantine/dates";

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
   * Returns the suffix for numbers to be written (3"rd", 2"nd", 1"st")
   * @param {!i} Number The number to calculate the ordinal
   * @returns {String} The ordinal for i
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

function displayDate(yearComparison, isFirstDate) {
  /**
   * Returns the text for the time input based on the individual dates' properties.
   * @param {!yearComparison} array[Date] The array of two dates which will be read into the inputs' title
   * @param {!isFirstDate} number A number that indicates the position in the dateValue array
   * @return {String} The month and date with an ordinal and an optional year if the years are different
   */
  let sameYear = false;
  let year;
  let month;
  let date;
  let ordinal;

  if (yearComparison[1] && yearComparison[0]) {
    if (yearComparison[0].getFullYear() === yearComparison[1].getFullYear()) {
      sameYear = true;
    }

    year = yearComparison[isFirstDate].getFullYear();
    month = monthNames[yearComparison[isFirstDate].getMonth()];
    date = yearComparison[isFirstDate].getDate();

    ordinal = ordinalSuffixes(date);

    if (sameYear === true) {
      return `${month} ${date}${ordinal}`;
    }
    return `${month} ${date}${ordinal}, ${year}`;
  }
  return "";
}

function TimeInputSelector({
  yearComparison,
  dateValue,
  setDateValue,
  isFirstDate,
}) {
  /**
   * Displays the correct date for the time input label and the
   * @param {!dateValue} DateObj The array containing the two different dates for choosing the time to restrict the query by
   * @param {!isFirstDate} int A "0" or "1" used to determine the index of the dateValue list
   * @return {ReactComponent} The time input component for the chart form on the charts page
   */
  const dateForLabel = displayDate(yearComparison, isFirstDate);

  return (
    <TimeInput
      defaultValue={dateValue}
      label={`${dateForLabel} Time`}
      onChange={setDateValue}
      radius="md"
      format="12"
      pt="1rem"
      px="1rem"
    />
  );
}

export default TimeInputSelector;
