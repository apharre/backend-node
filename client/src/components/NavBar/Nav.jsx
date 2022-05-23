import React from "react";
import { Header, Title, Image, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import apharreA from "../../images/apharreA.png";
import useStyles from "../../mantine/globalStyles";

function NavBar() {
  const { classes } = useStyles();

  return (
    <Container size="max-width" px={10}>
      <Header
        height={70}
        p="md"
        backgroundColor="##3394e8"
        className={classes.navBarHeader}
      >
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Image height={65} src={apharreA} />
          {/* <Title order={2} pl={20}> */}
          <Title order={2} className={classes.navBarTitle}>
            Apharre
          </Title>
          <Title
            component={Link}
            variant="link"
            to="/map"
            order={3}
            className={classes.navBarTitle}
          >
            Map
          </Title>
          <Title
            component={Link}
            variant="link"
            to="/chart"
            order={3}
            className={classes.navBarTitle}
          >
            Chart
          </Title>
          <Title
            component={Link}
            variant="link"
            to="/contact"
            order={3}
            className={classes.navBarTitle}
          >
            Contact Us
          </Title>
          <Title
            component={Link}
            variant="link"
            to="/posts"
            order={3}
            className={classes.navBarTitle}
          >
            Posts
          </Title>
        </div>

        {/* <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/contact" element={<Map />} />
          <Route path="/posts" element={<PostPage />} />
        </Routes> */}
      </Header>
    </Container>
  );
}

export default NavBar;
