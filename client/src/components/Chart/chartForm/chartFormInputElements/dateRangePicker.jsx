/* eslint-disable react/prop-types */
import React from "react";
import { DateRangePicker } from "@mantine/dates";

function TrafficDatePicker({ dateValue, setDateValue }) {
  return (
    <DateRangePicker
      label="Date Range"
      value={dateValue}
      onChange={setDateValue}
      clearable
      px="1rem"
      pt="1rem"
    />
  );
}

export default TrafficDatePicker;
