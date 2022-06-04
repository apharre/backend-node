import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MapPage from "../Map/MapPage";
import ChartPage from "../Chart/ChartPage";

function NavBarRoutes() {
  const [currentCamera, setCurrentCamera] = useState("");
  return (
    <Routes>
      <Route
        path="/map"
        element={
          <MapPage
            currentCamera={currentCamera}
            setCurrentCamera={setCurrentCamera}
          />
        }
      />
      <Route path="/posts" element={<ChartPage />} />
      <Route
        path="/chart"
        element={
          <ChartPage
            currentCamera={currentCamera}
            setCurrentCamera={setCurrentCamera}
          />
        }
      />
    </Routes>
  );
}

export default NavBarRoutes;
