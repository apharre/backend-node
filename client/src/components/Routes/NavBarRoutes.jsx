import React from "react";
import { Routes, Route } from "react-router-dom";

import Map from "../Map/Map";
import PostPage from "../PostPage/PostPage";
// import App from "../../App";

function NavBarRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/Map" element={<Map />} />
      <Route path="/Posts" element={<PostPage />} />
    </Routes>
  );
}

export default NavBarRoutes;
