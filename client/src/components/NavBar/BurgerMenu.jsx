import React, { useState } from "react";
import { Burger } from "@mantine/core";

function BurgerMenu() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Burger
      style={{ position: "absolute", right: "4rem" }}
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
      size="md"
    />
  );
}

export default BurgerMenu;
