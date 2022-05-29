import React from "react";
import { DateRangePicker } from "@mantine/dates";

// eslint-disable-next-line react/prop-types
function TrafficDatePicker({ dateValue, setDateValue }) {
  console.log(dateValue);
  return (
    <DateRangePicker
      label="Start and End Dates"
      placeholder="Set date range"
      value={dateValue}
      onChange={setDateValue}
    />
  );
}

export default TrafficDatePicker;
