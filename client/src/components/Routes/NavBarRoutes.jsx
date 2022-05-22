import React from "react";
import { Routes, Route } from "react-router-dom";

import Map from "../Map/Map";
import PostPage from "../PostPage/PostPage";
import ChartPage from "../Chart/ChartPage";
// import App from "../../App";

function NavBarRoutes() {
  const [selectedCamera, setSelectedCamera] = React.useState(null);

  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route
        path="/map"
        element={
          <Map selected={selectedCamera} setSelected={setSelectedCamera} />
        }
      />
      <Route path="/posts" element={<PostPage />} />
      <Route
        path="/chart"
        element={
          <ChartPage
            selected={selectedCamera}
            setSelected={setSelectedCamera}
          />
        }
      />
    </Routes>
  );
}

export default NavBarRoutes;
