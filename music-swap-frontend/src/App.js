import React, { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Spotify from "./Spotify/Spotify";
import YouTube from "./YouTube/YouTube";
import Home from "./Home/Home";
import { useStore } from "./Store/Store";

function App() {
  const [albumsToClone, setAlbumsToClone] = useState([]);

  // console.log(albumsToClone);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Spotify />}></Route>

        <Route
          path="/youtube"
          element={<YouTube {...{ albumsToClone }} />}
        ></Route>
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
