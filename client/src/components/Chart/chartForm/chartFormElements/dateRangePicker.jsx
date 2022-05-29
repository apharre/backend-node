import React from "react";
import { DateRangePicker } from "@mantine/dates";

// eslint-disable-next-line react/prop-types
function TrafficDatePicker({ dateValue, setDateValue }) {
  console.log(dateValue);
  return (
    <DateRangePicker
      label="Date Range"
      // placeholder="Pick dates range"
      value={dateValue}
      onChange={setDateValue}
      allowSingleDateInRange
      clearable
    />
  );
}

export default TrafficDatePicker;
