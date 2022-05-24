/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "@mantine/core";
import { Link } from "react-router-dom";
import useStyles from "../../mantine/globalStyles";

function NavBarButton({ buttonLink, buttonText }) {
  const { classes } = useStyles();
  return (
    <Text
      component={Link}
      variant="link"
      px="35px"
      to={buttonLink}
      size="xl"
      className={classes.navBarTitle}
    >
      {buttonText}
    </Text>
  );
}

export default NavBarButton;
