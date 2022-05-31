/* eslint-disable react/prop-types */
import React from "react";
import { Switch } from "@mantine/core";

function ChartSwitchButton({
  allStateObject,
  setAllStateObject,
  trueMessage,
  falseMessage,
  // vehicleSwitch=false,
}) {
  return (
    <Switch
      color="teal"
      checked={allStateObject}
      label={allStateObject ? `${trueMessage}` : `${falseMessage}`}
      onLabel="All"
      offLabel="Set"
      onChange={(event) => setAllStateObject(event.currentTarget.checked)}
      pt="1rem"
      px="1rem"
    />
  );
}

export default ChartSwitchButton;
