import React from "react";
import { createStyles, Center, Chips, Chip } from "@mantine/core";

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

function DirectionSelection() {
  const { classes } = useStyles();
  const direction1 = "Northbound Traffic";
  const direction2 = "Southbound Traffic";

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
        defaultValue={[direction1, direction2]}
      >
        <Chip value={direction1}>{direction1}</Chip>
        <Chip value={direction2}>{direction2}</Chip>
      </Chips>
    </Center>
  );
}

export default DirectionSelection;
