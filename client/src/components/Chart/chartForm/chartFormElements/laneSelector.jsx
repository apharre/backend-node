/* eslint-disable react/prop-types */
import React from "react";
import { Center, Chip, Chips, Collapse } from "@mantine/core";

function ChartLaneSelector({ allStateObject, laneNumbers, setLaneNumbers }) {
  return (
    <Collapse in={!allStateObject}>
      <Center inline px="1rem">
        <Chips multiple spacing="lg" size="sm" radius="md" py="1rem" px="1rem">
          {laneNumbers.map((currentLane) => (
            <Chip
              key={currentLane}
              multiple
              value={currentLane}
              onChange={setLaneNumbers}
              checked={laneNumbers}
            >
              Lane {currentLane}
            </Chip>
          ))}
        </Chips>
      </Center>
    </Collapse>
  );
}

export default ChartLaneSelector;
