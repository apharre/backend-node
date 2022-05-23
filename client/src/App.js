import React from "react";
import { MantineProvider } from "@mantine/core";

import ResponsiveAppBar from "./components/NavBar/Nav";
import NavBarRoutes from "./components/Routes/NavBarRoutes";

function App() {
  return (
    <MantineProvider>
      <ResponsiveAppBar />
      <NavBarRoutes />
    </MantineProvider>
  );
}

export default App;
