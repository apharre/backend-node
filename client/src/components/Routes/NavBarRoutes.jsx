import React from "react";
import { Routes, Route } from "react-router-dom";

import Map from "../Map/Map";
import PostPage from "../PostPage/PostPage";
import Chart from "../Chart/Chart";
// import App from "../../App";

function NavBarRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/map" element={<Map />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}

export default NavBarRoutes;
