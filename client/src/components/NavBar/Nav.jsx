import React from "react";
import { Header, Image, Container, Title } from "@mantine/core";

import apharreA from "../../images/apharreA.png";
import useStyles from "../../mantine/globalStyles";
import NavBarButton from "./NavButton";
import BurgerMenu from "./BurgerMenu";

function NavBar() {
  const { classes } = useStyles();

  return (
    <Container size="max-width" px={10}>
      <Header height={70} p="md" className={classes.navBarHeader}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Image height={65} src={apharreA} />
          <Title
            px="35px"
            order={2}
            weight={400}
            className={classes.navBarTitle}
          >
            Apharre
          </Title>

          <NavBarButton buttonLink="/map" buttonText="Map" />
          <NavBarButton buttonLink="/chart" buttonText="Chart" />
          <NavBarButton buttonLink="/posts" buttonText="Posts" />
          <BurgerMenu />
        </div>
      </Header>
    </Container>
  );
}

export default NavBar;
