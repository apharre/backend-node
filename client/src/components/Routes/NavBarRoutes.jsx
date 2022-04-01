import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Map from "../Map/Map";
import PostPage from "../PostPage/PostPage";
import ChartPage from "../Chart/ChartPage";
// import App from "../../App";

function NavBarRoutes() {
  const [currentCamera, setCurrentCamera] = useState("");
  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route
        path="/map"
        element={
          <Map
            currentCamera={currentCamera}
            setCurrentCamera={setCurrentCamera}
          />
        }
      />
      <Route path="/posts" element={<PostPage />} />
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
