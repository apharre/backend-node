import React from "react";
import { DateRangePicker } from "@mantine/dates";

// eslint-disable-next-line react/prop-types
function TrafficDatePicker({ dateValue, setDateValue }) {
  return (
    <DateRangePicker
      label="Date Range"
      value={dateValue}
      onChange={setDateValue}
      clearable
    />
  );
}

export default TrafficDatePicker;
