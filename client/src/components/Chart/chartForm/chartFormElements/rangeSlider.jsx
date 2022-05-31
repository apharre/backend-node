/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React from "react";
import { RangeSlider, Collapse } from "@mantine/core";

const speedMarkers = [
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100+" },
];

const tempMarkers = [
  { value: -20, label: "-20" },
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100" },
  { value: 120, label: "120+" },
];

class SliderType {
  constructor(markerType) {
    this.markerType = markerType;
    this.label = this.markerType === "speed" ? "mph" : "°F";
    this.markers = this.markerType === "speed" ? speedMarkers : tempMarkers;
    this.minValue = this.markerType === "speed" ? 0 : -20;
    this.maxValue = this.markerType === "speed" ? 100 : 120;
    this.defaultMinValue = this.markerType === "speed" ? 25 : 0;
    this.defaultMaxValue = this.markerType === "speed" ? 75 : 100;
    this.bottomPadding = this.markerType === "speed" ? "1rem" : "2rem";
  }
}

function ChartRangeSlider({ allStateObject, markerType }) {
  const typeOfSlider = new SliderType(markerType);

  return (
    <Collapse in={!allStateObject}>
      <RangeSlider
        defaultValue={[
          typeOfSlider.defaultMinValue,
          typeOfSlider.defaultMaxValue,
        ]}
        min={typeOfSlider.minValue}
        max={typeOfSlider.maxValue}
        marks={typeOfSlider.markers}
        label={(value) => `${value} ${typeOfSlider.label}`}
        px="1rem"
        pt="1rem"
        pb={typeOfSlider.bottomPadding}
      />
    </Collapse>
  );
}

export default ChartRangeSlider;
