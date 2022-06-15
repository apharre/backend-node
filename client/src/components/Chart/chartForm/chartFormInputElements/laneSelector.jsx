/* eslint-disable react/prop-types */
import React from "react";
import { createStyles, Center, Chip, Chips, Collapse } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef("iconWrapper"),
  },

  checked: {
    backgroundColor: `${theme.colors.blue[6]} !important`,
    color: theme.white,
    [`& .${getRef("iconWrapper")}`]: {
      color: theme.white,
    },
  },
}));

function ChartLaneSelector({
  allStateObject,
  defaultLaneNumbers,
  laneNumbers,
  setLaneNumbers,
}) {
  const { classes } = useStyles();
  // console.log(laneNumbers);

  return (
    <Collapse in={!allStateObject}>
      <Center inline px="1rem">
        <Chips
          multiple
          classNames={classes}
          value={laneNumbers}
          spacing="lg"
          size="sm"
          radius="md"
          py="1rem"
          px="1rem"
          onChange={setLaneNumbers}
        >
          {defaultLaneNumbers.map((currentLane) => (
            <Chip
              key={currentLane}
              multiple
              value={currentLane}
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
