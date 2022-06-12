/* eslint-disable react/prop-types */
import React from "react";
import { createStyles, Center, Chips, Chip } from "@mantine/core";

// This is also used exactly in the Lane selection page.
// TODO: create a global style object for later
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

function DirectionSelection({ currentCamera, setDirectionSelector }) {
  const { classes } = useStyles();
  const trafficButtonText = "bound Traffic";
  let direction1 = "North";
  let direction2 = "South";

  if (currentCamera.direction === "NS") {
    direction1 = "North";
    direction2 = "South";
  } else if (currentCamera.direction === "EW") {
    direction1 = "East";
    direction2 = "West";
  }

  return (
    <Center>
      <Chips
        multiple
        classNames={classes}
        spacing="s"
        size="sm"
        radius="md"
        py="1rem"
        px="1rem"
        defaultValue={[0, 1]}
        onChange={setDirectionSelector}
      >
        <Chip value={0}>
          {direction1}
          {trafficButtonText}
        </Chip>
        <Chip value={1}>
          {direction2}
          {trafficButtonText}
        </Chip>
      </Chips>
    </Center>
  );
}

export default DirectionSelection;
