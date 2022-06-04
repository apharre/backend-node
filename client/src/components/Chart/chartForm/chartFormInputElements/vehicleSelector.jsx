/* eslint-disable react/prop-types */
import React from "react";
import { Collapse, MultiSelect } from "@mantine/core";

function ChartVehicleSelector({
  allVehicles,
  selectedVehicles,
  setSelectedVehicles,
}) {
  return (
    <Collapse in={!allVehicles}>
      {!selectedVehicles.length ? (
        <MultiSelect
          data={["Commuter", "Truck", "Bus", "Motorcycle"]}
          label="Vehicle Type"
          defaultValue={selectedVehicles}
          clearButtonLabel="Clear selection"
          onChange={setSelectedVehicles}
          error="Select at least one item"
          clearable
          py="1rem"
          px="1rem"
        />
      ) : (
        <MultiSelect
          data={["Commuter", "Truck", "Bus", "Motorcycle"]}
          label="Vehicle Type"
          placeholder="Vehicle Types to Include"
          defaultValue={selectedVehicles}
          clearButtonLabel="Clear selection"
          onChange={setSelectedVehicles}
          clearable
          py="1rem"
          px="1rem"
        />
      )}
    </Collapse>
  );
}

export default ChartVehicleSelector;
